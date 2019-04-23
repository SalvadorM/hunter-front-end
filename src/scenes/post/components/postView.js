import React from 'react'

import { Link } from 'react-router-dom'

const PostView = (props) => {
    console.log(props)
    let { id, title } = props.post
    let postOwnerId = props.post.user.id
    let usernameOwner = props.post.user.username
    return(
        <div className="post-card">
        <Link to={`/post/view/${id}`}>{title}</Link>
        <br/>
        <Link to={`/user/${postOwnerId}`}>{usernameOwner}</Link>
        <br/>
        <br/>
        <br/>

        </div>
    )
}

export default PostView