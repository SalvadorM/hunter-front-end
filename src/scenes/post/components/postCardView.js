import React from 'react'

import { Link } from 'react-router-dom'

const PostCardView = (props) => {
    let { id, title } = props.post
    let postOwnerId = props.post.user.id
    let usernameOwner = props.post.user.username
    return(
        <div className="post-card col-6 card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p><Link to={`/user/${postOwnerId}`}>Posted by: {usernameOwner}</Link></p>
                <Link to={`/post/view/${id}`} className="btn btn-outline-info">view post</Link>
            </div>
    
        </div>
    )
}

export default PostCardView