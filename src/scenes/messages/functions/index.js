import axios from '../../../utilities/axios'


export const getChatMessages = async (chatId) => {
    try {

    } catch(e) {

    }
}

export const createNewChat = async (otherUser) => {
    try{

    } catch(e) {
        
    }
}

export const addChatMessage = async (message) => {
    try{

    } catch(e) {
        
    }
}

export const getChatMembers = async (message) => {
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