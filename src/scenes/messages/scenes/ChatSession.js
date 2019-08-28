import React, { Component } from 'react'
import io from 'socket.io-client'
import { isUserChatMember,} from '../functions/index'


const socketUrl = "http://localhost:8000"




export default class ChatSessionContainer extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
		  socket:null,
		  chatId: '',
	  	user:null
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
				console.log('member ')
				this.initSocket(chatId)
			}
		} catch(e) {
			console.log(e)
		}
	}

	/*
	*	Connect to and initializes the socket.
	*	Add ChatId to Socket room
	*/
	initSocket = (chatId) =>{
		const socket = io(socketUrl)

		socket.emit('subscribe', {chatId})


		socket.on('new message', (data) => {
			console.log('inside new message')
			console.log(data)
		})
		this.setState({socket, chatId})
	}


	sendNewMessage = () => {
		console.log('sending message')
		const {socket, chatId} = this.state

		socket.emit('send message', {chatId, msg: 'hi'})
	}


	render() {
		return (
			<div className="container">
                TEST MESSAGE CONTAINER 
				<br/>
				<br/>

				<button onClick={() => this.sendNewMessage()}> New message</button>
			</div>
		);
	}
}
