import React , { Component } from 'react'

//router 
// import { Link } from 'react-router-dom'

class RequestUserView extends Component{
    constructor(props){
        super(props)
    }

    acceptReq = () => {
        this.props.acceptFriendRequest(this.props.user.userId)
    }

    render(){
        return(
            <li className="list-group-item d-flex justify-content-between align-items-center">
            {this.props.user.username}
            <button className="btn btn-primary" onClick={this.acceptReq}>accept friend</button>
          </li>
        )
    }
}

export default RequestUserView