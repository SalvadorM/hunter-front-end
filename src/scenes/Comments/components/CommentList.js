import React, {Component} from 'react'

import  CommentView  from '../components/CommentView'

class CommentList extends Component {

    render(){
        const comments = this.props.comments
        let renderUserView = this.props.userview
        let AllComments = <p>No Comments</p>
    
        if(renderUserView && comments.length != 0) {

        }else if ((!renderUserView) && comments.length != 0) {
            AllComments = comments.map(comment => {
                return <CommentView comment={comment} key={comment.id} />
            })
        }
                    
        return(
            <div className="container text-center mt-4">
                <h2 id="comment-h2">Comments</h2>
                {AllComments} 
            </div>
        )
        
    }
}

export default CommentList