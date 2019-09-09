import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const MessageView = (props) => {
    const message = props.msg
    const sessionUser = parseInt(props.userId)
    const messageClass = (sessionUser === message.actionUser) ? 'card-container session-user' : 'card-container other-user'
    
    return(
    <div className={messageClass}>


            { (sessionUser !== message.actionUser) ? 
                (

             <div className="message-card">
                <div className="message-user">
                    <Link to={`/profile/${message.actionUser}`}>{message.actionUsername.split(0,6)}</Link>
                </div>
                <div className="message-body">{message.messageBody} </div>

            </div>
             ) :
                (
                    <div className="message-card">
                        <div className="message-body me">{message.messageBody} </div>
                    </div>

                ) }
    </div>)
}

export default class Messages extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId : localStorage.getItem('userId')
        }   
    }

    messagesEndRef = React.createRef()

    componentDidMount(){
        this.scrollToBottom()
    }

    componentDidUpdate(){
        this.scrollToBottom()

    }

    scrollToBottom = () => {
        this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
      }

    render(){
        const { userId } = this.state
        const messages = this.props.messages
        const messagesArray = messages.map((val, i) => {
            return( <MessageView msg={val} key={i} userId={userId} />)
        })
    // check if its current user then float right
    //  other people messages go in the left
        return(
            <div className="messages">
                {messagesArray}
                <div style={{ float:"left", clear: "both" }}
                    ref={this.messagesEndRef}>
                </div>
            </div>
        )
    }

}