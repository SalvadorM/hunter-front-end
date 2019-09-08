import React, { Component } from 'react'
import io from 'socket.io-client'
import { isUserChatMember, getChatMessages, getChatInfo,} from '../functions/index'

//styles 
import '../../../stylesheets/chat.scss'
//components
import Messages from '../components/Messages'

// const socketUrl = "http://localhost:8000"
const socketUrlServer = `https://hunter-app-api.herokuapp.com/`

/*
	when creating a new chat make a modal with chat 
	and then redirect once given the chatid 
		-> render this component 

*/


export default class ChatSessionContainer extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
		socket:null,
		chatId: '',
		userId: localStorage.getItem('userId'),
		messageInput: '',
		messages: [],
		chatName: ''
	  };
	}

	async componentDidMount() {
		try {
			const chatId = this.props.match.params.chatid
			const isMember = await isUserChatMember(chatId)
			if(!isMember){
				//not chat member 
				this.props.history.push('/')
			} else {
				//is a chat member
				const messages = await getChatMessages(chatId)
				const chatInfo = await getChatInfo(chatId)
				const chatNameSplit = chatInfo.chatName.split('-')
				const chatName = `Chatting with ${chatNameSplit[2]}`

				this.initSocket(chatId, messages, chatName)
			}
		} catch(e) {
			console.log(e)
		}
	}

	initSocket = async (chatId, messages, chatName) =>{
		const socket = io.connect()
		const {userId} = this.state

		socket.emit('subscribe', {chatId, userId})


		socket.on('new message', async (data) => {
			try{
				const messages =  await getChatMessages(chatId)
				this.setState({messages})
			} catch(e) {
				console.log(e)
			}
		})

		this.setState({socket, chatId, messages, chatName})
	}

	onChange = (e) => {
		this.setState({messageInput: e.target.value}) 
	}

	sendNewMessage = () => {
		const {socket, chatId, userId, messageInput} = this.state
		if(messageInput.length !== 0){
			socket.emit('send message', {chatId, userId, message: messageInput})
			this.setState({messageInput: ''})
		}
	}

	onKeyDwn = (e) => {
		if (e.key === 'Enter') {
			this.sendNewMessage()
		}
	}

	render() {
		const {messageInput, messages, chatName} = this.state 
		return (
			<div className="container">
					<div className="title-container">
						<h2 className="chat-name">{chatName}</h2>

					</div>
					<div className="chat-container">
						<Messages messages={messages} />
					</div>

                    <div className="input-container"> 
						<input className="form-control text-area"
							onChange = { (e) => this.onChange(e)}
							value={messageInput}
							onKeyDown={(e) => this.onKeyDwn(e)}
							required></input>
						
						<button className="send-btn" onClick={() => this.sendNewMessage()}>Send</button>

					</div>

			</div>
		);
	}
}
