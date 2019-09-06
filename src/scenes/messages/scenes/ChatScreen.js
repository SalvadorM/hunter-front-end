import React, {Component} from 'react'
import { Link } from 'react-router-dom'

import {getUserChats, } from '../functions/index'

const ChatDisplay = (props) => {
    const chat = props.chat
    const chatNameSplit = chat.chatName.split('-')
    const chatName = `Chat with ${chatNameSplit[2]}`
    const chatCreated = chat.createdAt.slice(0, 10)
    return(
        <div className="card">
            <div className="card-body">
            <h5 className="card-title">{chatName}</h5>
            <p className="card-text">created: {chatCreated} </p>
            <Link to={`/chat/${chat.id}`} className="caret"/>
            </div>
        </div>
    )
}

export default class ChatScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            chats: []
        }
    }

    componentDidMount = async () => {
        try{
            const chats = await getUserChats()
            this.setState({chats})
        } catch(e) {
            console.log(e)
        }
    }
    render() {
        const { chats } = this.state

        let chatsView

        if(chats.length === 0 ) {
            chatsView = (
            <div className="post-card card">
                <div className="card-body"><p className="card-text">Send a message to a friend</p></div>
            </div>
            )
        } else {
            chatsView = chats.map((val, i) => {
                return (<ChatDisplay chat={val} key={i} />)
            })
        }

        return(
            <div className="friendlist-container text-center">
                <div className="information-badge">
                    Chats <span className="badge">{chats.length}</span>
                </div>
                {chatsView}
            </div>
        )
    }
}