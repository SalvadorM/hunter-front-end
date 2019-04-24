import React, { Component } from 'react'

//functions 
import {getUserFriendRequestList, acceptFriendRequest} from '../functions/index'
import RequestUserView from '../components/RequestUserView';

class ViewFriendRequests extends Component {
    constructor(props){
        super(props)

        this.state = {
            friendRequestList: [],
            error: false,
            errorMessage: 'There was an error getting information from database, try again',
        }
    }

    componentDidMount(){
        this.getFriendRequestList()
    }

    getFriendRequestList = async () => {
        try{
            let friendReqRes = await getUserFriendRequestList()
            let friendRequestList = friendReqRes.data.map(val => {
                let user = {
                    username: val.user.username,
                    userId: val.user.id
                }
                return user
            })
            if(friendReqRes.status === 200){
                this.setState({
                    friendRequestList
                })
            }else{
                this.setState({
                    error: true, 
                })
            }
        }   
        catch(err){
            console.log(err)
            this.setState({
                error: true, 
            })
        }
    }
    
    acceptFriendRequest = async (acceptedUserId) => {
        try{
            let acceptRes = await acceptFriendRequest(acceptedUserId)
            if(acceptRes.status === 200){
                this.props.refreshHome()
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
                errorMessage: 'There was an error getting information from database, try again'
            })
        }
    }

    render(){
        let {friendRequestList} = this.state
        let requestList
        if(friendRequestList.length === 0){
            requestList = ( <li className="list-group-item d-flex justify-content-between align-items-center">
            empty
          </li> )
        }else {
            requestList = friendRequestList.map( (val, i) => {
                return(<RequestUserView user={val} key={i} acceptFriendRequest={this.acceptFriendRequest}/>)
            })
        }
        return(
            <div className="FR-container text-center">
            <h1>Show request list</h1>
                <div className="container">
                    <ul className="list-group">
                    {requestList}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ViewFriendRequests