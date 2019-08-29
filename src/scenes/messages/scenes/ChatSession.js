import React, { Component } from 'react'
import io from 'socket.io-client'
import { isUserChatMember, getChatMessages,} from '../functions/index'

//components
import Messages from '../components/Messages'

const socketUrl = "http://localhost:8000"

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
				this.initSocket(chatId, messages)
			}
		} catch(e) {
			console.log(e)
		}
	}

	initSocket = async (chatId, messages) =>{
		const socket = io(socketUrl)
		const {userId} = this.state

		socket.emit('subscribe', {chatId, userId})


		socket.on('new message', async (data) => {
			try{
				console.log('fetch the new messages')
				const messages =  await getChatMessages(chatId)
				this.setState({messages})
			} catch(e) {
				console.log(e)
			}
		})

		this.setState({socket, chatId, messages})
	}

	onChange = (e) => {
		this.setState({messageInput: e.target.value}) 
	}

	sendNewMessage = () => {
		console.log('sending message')
		const {socket, chatId, userId, messageInput} = this.state
		if(messageInput.length !== 0){
			socket.emit('send message', {chatId, userId, message: messageInput})
			this.setState({messageInput: ''})
		}
	}

	render() {
		const {messageInput, messages} = this.state 
		return (
			<div className="container">
                TEST MESSAGE CONTAINER 
				<br/>
				<br/>
					<div className="chat-container">
						{/* Message array goes here */}
						<Messages messages={messages} />
					</div>

                    <div className="col-12"> 
						<input className="form-control"
							onChange = { (e) => this.onChange(e)}
							value={messageInput}
							required></input>
					</div>


				<button onClick={() => this.sendNewMessage()}>Send</button>
			</div>
		);
	}
}
