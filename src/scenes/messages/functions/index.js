import axios from '../../../utilities/axios'


export const getChatMessages = async (chatId) => {
    try {
        const messages = await axios.get(`/chat/messages/${chatId}`)

        if(messages.status === 200){
            return messages.data
        }
        throw new Error('GET status was not 200')
    } catch(e) {
        console.log(e)
        return false 
    }
}

export const createNewChat = async (otherUserId) => {
    try{
        const newChatRes = await axios.post({otherUserId})
        if(newChatRes.status === 200) {
            return newChatRes.data
        }
        throw new Error('GET status was not 200')
    } catch(e) {
        console.log(e)
        return false
    }
}

export const getUserChats = async () => {
    try{
        const userChatRes = await axios.get(`/chat/userchats`)
        if(userChatRes.status === 200){
            return userChatRes.data
        }
        throw new Error('GET status was not 200')

    } catch(e) {
        console.log(e)
        return false
    }
}

export const isUserChatMember = async (chatId) => {
    try{
        const memberRes = await axios.get(`/chat/ismember/${chatId}`)
        return memberRes.data.success 
    } catch(e) {
      console.log(e)
      return false  
    }
}

export const getChatInfo = async (chatId) => {
    try{
        const chatInfoRes = await axios.get(`/chat/info/${chatId}`)
        
        if(chatInfoRes.status === 200) {
            return chatInfoRes.data 
        }

        throw new Error('GET status was not 200')
        
    }catch (e) {
        console.log(e)
        return false
    }
}

export const hasChatWith = async (otherUserId) => {
    try{ 
        const hasChatRes = await axios.get(`/chat/haschat/${otherUserId}`)

        if(hasChatRes.status === 200){
            return hasChatRes.data
        }

        throw new Error('GET status was not 200')
    } catch(e) {
        console.log(e)
        return false
    }
}