import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

//functions
import { createNewChat, hasChatWith } from '../functions/index'

class NewChatScreen extends Component{
    constructor(props){
        super(props)

        this.state = {
            hasChatWith: null,
            chadId: '',
        }
    }

    componentDidMount = async () => {
        try{
            const otherUserId = this.props.otherUserId
            const hasChatRes = await hasChatWith(otherUserId)
            this.setState({
                hasChatWith: hasChatRes.success,
                chatId: hasChatRes.chatId
            })
        }
        catch(e){
            console.log(e)
        }
    }

    createChat = async () => {
        try {
            const otherUserId = this.props.otherUserId
            const newChat = await createNewChat(otherUserId)
            console.log(newChat)
            this.props.history.push(`/chat/${newChat.id}`)
        } catch(e) {
            console.log(e)
        }
    }

    render(){
        const {hasChatWith, chatId} = this.state 
        if(hasChatWith) {
            return(
                <div className="text-center">
                    <Link className="btn btn-primary mb-3" to={`/chat/${chatId}`}>Go to chat</Link>
                </div>
            )
        } else {
            return (
                <div className="text-center"> 
                    <button onClick={() => this.createChat()} className="btn btn-primary">Send Message</button>
                </div>
            )
        }
    }
}
export default withRouter(NewChatScreen)