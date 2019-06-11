import React from 'react'

import { Link } from 'react-router-dom'

const PostCardView = (props) => {

    let { id, title } = props.post
    let postOwnerId = props.post.user.id
    let usernameOwner = props.post.user.username

    return(
        <div className="col-6">
        <div className="post-card card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>By: <Link to={`/profile/${postOwnerId}`}>{usernameOwner}</Link></p>
                <Link to={`/post/view/${id}`} className="btn btn-outline-primary btn-view">view post</Link>
            </div>
        </div>
        </div>
    )
}

export default PostCardView