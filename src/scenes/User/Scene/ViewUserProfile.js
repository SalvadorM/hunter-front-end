import React, { Component } from 'react'

//router 
import { Redirect } from 'react-router-dom'

//functions 
import { isFriends } from '../../Friendship/functions/index'
import { getProfileInfo } from '../functions/index.js'

//components
import ViewUserFriends from '../../Friendship/scene/ViewUserFriends';
import ViewUserComments from '../../Comments/scene/ViewUserComments'
import ViewUserPosts from '../../post/scene/ViewUserPosts'
import PrivateFriendComponent from '../../Friendship/components/PrivateFriendComponent'

class ViewUserProfle extends Component {
    constructor(props){
        super(props)

        this.state = {
            loggedUser: localStorage.getItem('userId'),
            userProfileId: this.props.match.params.userid,
            error: false,
            errorMessage: '',
            profileInfo: {
                username: '',
                name: '',
                email: '',
            },
            isFriends: false,
            
        }
    }

    componentDidMount(){
        this.setUserProfile()
    }

    setUserProfile = async () => {
        try{
            let { loggedUser, userProfileId } = this.state
            
            if(loggedUser != userProfileId) {
                let isFriendRes = await isFriends(userProfileId)       
                let profileInfoRes = await getProfileInfo(userProfileId)

                let profileInfo = {
                    username: profileInfoRes.data.username,
                    name: profileInfoRes.data.name,
                    email: profileInfoRes.data.email,
                }

                this.setState({
                    isFriends: isFriendRes,
                    cbResponce: true,
                    profileInfo, 
                })
                
            }

        }
        catch(err){
            console.log(err)
            
        }
    }

    render(){
         
        let { loggedUser, userProfileId, profileInfo, isFriends, cbResponce } = this.state
        let PrivateSection 

        if(loggedUser === userProfileId) {
            return(<Redirect to="/home" />)
        } else if(!isFriends && cbResponce){
            PrivateSection = (
                <PrivateFriendComponent profileUserId={userProfileId} username={profileInfo.username} />
            )
        } else if (isFriends && cbResponce){
            PrivateSection = (
                <div>
                <ViewUserFriends currentUser={userProfileId} profileView={true}/>
                <ViewUserComments currentUser={userProfileId} />
                <ViewUserPosts currentUser={userProfileId} />
                </div>
            )
        }
        

        return(
            <div className="container user-profile-container">
                <div className="jumbotron">
                <h1 className="display-4">{profileInfo.username}</h1>
                <hr className="my-4"/>
                <p>{profileInfo.name}</p>
                <br />

                <p>{profileInfo.email}</p>
                </div>
                <div className="private-container">
                    {PrivateSection}
                </div>
            </div>
        )
    }
}

export default ViewUserProfle