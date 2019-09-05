import React, { Component } from 'react'

import { createNewChat } from '../functions/index'

const createChat = async () => {
    try {
        const newChat = await createNewChat()
        console.log(newChat)
    } catch(e) {
        console.log(e)
    }
}

export default NewChatScreen = () => {

    return (
        <div> 
            <button className="btn btn-primary">Send Message</button>
        </div>
    )
}