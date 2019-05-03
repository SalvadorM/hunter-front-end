import React, { Component } from 'react'

//functions
import { getUserFriendlist, getOtherUserFriendlist } from '../functions/index'

//components
import UserInfoDisplay from '../../courses/components/userInfo'

class ViewUserFriends extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            friends: [],
            error: false,
            errorMessage: '',
        }

    }


    componentDidMount(){
        this.getUserFriendlist()
    }

    getUserFriendlist = async () => {
        try{
            let { currentUser, profileView} = this.props


            let friendRes 
            if(!profileView){
                friendRes = await getUserFriendlist(currentUser)
            }else {
                friendRes = await getOtherUserFriendlist(currentUser)
            }
            if(friendRes.status === 200){
            let friends  = friendRes.data.map(val => {
                let student = {
                    userId: val.id,
                    username: val.username,
                    name: val.name
                }
                return student
            })
                this.setState({
                    friends
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
                errorMessage: 'There was an error getting information from database, try again'
            })
        }
    }

    render(){
         
        let { friends, error, errorMessage } = this.state
        let friendList
        if(friends.length === 0){
            friendList = (
                <div className="text-center">
                    <h4>No friends</h4>
                    <p>Find friends</p>
                </div>
            )
        }else {
            friendList = friends.map((val,i) => { return( <UserInfoDisplay student={val} key={i}/>) })
        }

        return(
            <div className="friendlist-container text-center">
                <h4>Friends</h4>
                {friendList}
            </div>
        )
    }
}

export default ViewUserFriends