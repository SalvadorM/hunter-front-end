import React, { Component } from 'react'

//react router
import { Redirect } from 'react-router-dom'

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
            cbResponce: false,
            acceptedUserId: '',
        }
    }

    componentDidMount(){
        this.getFriendRequestList()
    }

    getFriendRequestList = async () => {
        try{
            let friendReqRes = await getUserFriendRequestList()
            let friendRequestList = friendReqRes.data.map(val => {
                console.log(val)
                let user = {
                    username: val.username,
                    userId: val.id
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
                this.setState({
                    cbResponce: true,
                    acceptedUserId,
                })
            }else{
                this.setState({
                    error: true, 
                    errorMessage: 'There was an error getting information from database, try again'
                })
            }
            console.log(`chaning url to ${acceptedUserId}`)
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

        let {friendRequestList, cbResponce, acceptedUserId} = this.state

        let requestList
        if(friendRequestList.length === 0){
            requestList = (<span />)
        } else if( cbResponce ){
            return(<Redirect to={`/profile/${acceptedUserId}`} />)
        }else {
            requestList = friendRequestList.map( (val, i) => {
                return(<RequestUserView user={val} key={i} acceptFriendRequest={this.acceptFriendRequest}/>)
            })
        }
        return(
            <div className="fRequest-container text-center">

                <div className="information-badge">
                        Friend Request <span className="badge">{friendRequestList.length}</span>
                </div>

                <div className="">
                    {requestList}
                </div>
                
            </div>
        )
    }
}

export default ViewFriendRequests