import axios from '../../../utilities/axios'


export const getChatMessages = async (chatId) => {
    try {
        const messages = await axios.get(`/chat/messages/${chatId}`)

        if(messages.status === 200){
            return messages.data
        }
        throw 'GET status was not 200'
    } catch(e) {
        console.log(e)
        return false 
    }
}

export const createNewChat = async (otherUser) => {
    try{

    } catch(e) {
        
    }
}

export const getUserChats = async () => {
    try{

    } catch(e) {
        
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

        throw 'Responce status is not succesful'
        
    }catch (e) {
        console.log(e)
        return false
    }
}