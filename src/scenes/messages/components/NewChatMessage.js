import React, { Component } from 'react'
import { Link } from 'react-router-dom'

//functions
import { createNewChat, hasChatWith } from '../functions/index'

export default class NewChatScreen extends Component{
    constructor(props){
        super(props)

        this.class = {
            hasChat: false,
            chadId: '',
        }
    }

    componentDidMount = async () => {
        try{
            const otherUserId = this.props.otherUserId
            const hasChatRes = await hasChatWith(otherUserId)
            console.log(hasChatRes)
            // this.setState({
            //     hasChat: hasChatRes.success,
            //     chatId: hasChatRes.chatId
            // })
        }
        catch(e){
            console.log(e)
        }
    }

    createChat = async () => {
        try {
            const newChat = await createNewChat()
            console.log(newChat)

        } catch(e) {
            console.log(e)
        }
    }

    render(){
        const {hasChat, chatId} = this.state 
        if(hasChat) {
            return(
                <div>
                    <Link to={`/chat/${chatId}`} />
                </div>
            )
        } else {
            return (
                <div> 
                    <button onClick={() => this.createChat()} className="btn btn-primary">Send Message</button>
                </div>
            )
        }

    }
}