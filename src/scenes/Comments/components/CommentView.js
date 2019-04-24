import React from 'react'

import { Link } from 'react-router-dom'

const CommentView = (props) => {
    let { body } = props.comment
    let commentOwner = props.comment.user
    return(
        <div className="commentview-container border my-3">
            <p>{body}</p>
            <div className="username-comment">
                <Link to={`/user/${commentOwner}`} >{commentOwner.username}</Link>
            </div>  
        </div>
    )
}

export default CommentView