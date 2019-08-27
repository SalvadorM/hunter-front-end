import React, { Component } from 'react'
import io from 'socket.io-client'

const socketUrl = "http://localhost:8000"

export default class ChatSessionContainer extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	socket:null,
	  	user:null
	  };
	}

	componentWillMount() {
		this.initSocket()
	}

	/*
	*	Connect to and initializes the socket.
	*/
	initSocket = () =>{
		const socket = io(socketUrl)

		socket.emit('chat message', {message: 'test', hi: 'hola'})
		this.setState({socket})
	}


	sendNewMessage = () => {
		
	}


	render() {
        const { socket } = this.state
        console.log(socket)
		return (
			<div className="container">
                TEST MESSAGE CONTAINER 
			</div>
		);
	}
}