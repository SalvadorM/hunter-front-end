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
         
        let { friends } = this.state
        let friendList
        if(friends.length === 0){
            friendList = (
                <div className="post-card card">
                    <div className="card-body"><p className="card-text">Find friends through classes</p></div>
                </div>
            )
        }else {
            friendList = friends.map((val,i) => { return( <UserInfoDisplay student={val} key={i}/>) })
        }

        return(
            <div className="friendlist-container text-center">
                <div className="information-badge">
                    Friends <span className="badge">{friends.length}</span>
                </div>
                {friendList}
            </div>
        )
    }
}

export default ViewUserFriends