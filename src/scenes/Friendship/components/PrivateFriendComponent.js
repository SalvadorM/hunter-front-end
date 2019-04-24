import React, { Component } from 'react'

//router 
import { Link } from 'react-router-dom'

//functions 
import { sendFriendRequest } from '../functions/index'

class PrivateFriendComponent extends Component{
    constructor(props){
        super(props)
        console.log(this.props)

        this.state = {
            profileUserId: this.props.profileUserId,
            username: this.props.username,
            error: false,
            errorMessage: '',
            cbResponce: false,
        }
    }

    sendFRToProfileUserId = async () => {
        try{
            let { profileUserId } = this.state
            
            let requestRes = await sendFriendRequest(profileUserId)
            console.log(requestRes)

            if(requestRes.status === 200){
                this.setState({
                    cbResponce: true,
                })
            }else{
                this.setState({
                    error: true, 
                    errorMessage: 'There was an error getting information from database, try again'
                })
            }
        }
        catch(err){
            console.log(err)
            this.setState({
                error: true,
                errorMessage: 'There was an error sending request, try again later'
            })
        }
    }

    render(){
        let { username, error, errorMessage, cbResponce} = this.state

        let messageBody = (
            <div className="card-body">
            <h5 className="card-title">Add {username} as friend to view profile</h5>
            <button className="btn btn-primary" onClick={this.sendFRToProfileUserId}>Send Friend Request</button>
            </div>
        )
        if(cbResponce){
            messageBody = (
                <div className="card-body">
                <h5 className="card-title">Friend request sent to {username} </h5>
                <Link to="/home" className="btn btn-primary">Go Home</Link>
                </div>
            )
        }

        return(
        <div className="Private-section">
        <div className="card text-center">
            {messageBody}
        </div>            
        </div>
        )
    }

}


export default PrivateFriendComponent