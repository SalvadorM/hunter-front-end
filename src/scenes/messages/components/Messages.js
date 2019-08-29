import React, { Component } from 'react'

const MessageView = (props) => {
    return(<div className="message-card">
        <div className="message-user">

        </div>
        <div className="message-body">

        </div>
    </div>)
}
export default class Messages extends Component {
    constructor(props){
        super(props)
        this.state = {
            userId : localStorage.getItem('userId')
        }   
    }


    render(){
        console.log(this.props)
    // check if its current user then float right
    //  other people messages go in the left
        return(<div>
            Message
        </div>)
    }

}