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

		socket.on('connect', ()=>{
			console.log("Connected");
		})
		
		this.setState({socket})
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