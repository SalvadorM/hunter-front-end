import axios from '../../../utilities/axios'

export const getUserFriendlist = async () => {
    let url =  `/friendship/friendlist`
    return axios.get(url)
}

export const getUserFriendRequestList = async () => {
    let url = `/friendship/requestlist`
    return axios.get(url)
}

export const acceptFriendRequest = async (acceptedFriendId) => {
    let url = `/friendship/acceptrequest`
    let body = {
        request: acceptedFriendId
    }

    return axios.post(url, body)
}

export const sendFriendRequest = async (requestedFriendId) => {
    let body = {
        request: requestedFriendId
    }
    let url = `/friendship/friendrequest`

    return axios.post(url,body)
}

export const getOtherUserFriendlist = async (otherUserId) => {
    let url = `/friendship/profilefriendslist/${otherUserId}`
    return axios.get(url)
}

export const isFriends = async (friendId) => {
    let url = `/friendship/isfriend/${friendId}`
    try{
        let responce = await axios.get(url)
        if(responce.status === 200){
            let isFriends = (responce.data.friend)? true : false
            return isFriends
        }
        return false
    }
    catch(err){
        console.log(err)
        return false
    }
   
}

export const removeFriend = async () => {

}