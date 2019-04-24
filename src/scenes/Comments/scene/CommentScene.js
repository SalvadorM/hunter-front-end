import React, { Component } from 'react'

import { getPostComments } from '../functions'
import CommentList from '../components/CommentList'
import PostCommetForm from '../components/PostCommetForm'


class CommentScene extends Component {
    constructor(props){
        super(props)

        this.state = {
            comments: [],
            error: false,
            errorMessage: '',
            postId: '',
        }
    }

    componentDidMount(){
        this.setState({
            postId: this.props.postId
        }, () => {
            this.getPostComments()
        })
    }

    getPostComments = async () => {
        try{
            let { postId } = this.state
            let commentRes = await getPostComments(postId)
            if(commentRes.status === 200){
                this.setState({
                    comments: commentRes.data
                })
            }   
            this.setState({
                error: true,
                errorMessage: 'Error getting comments , try again'
            })
        }
        catch(err){
            console.log(err)
            this.setState({
                error: true,
                errorMessage: 'Error getting comments , try again'
            })
        }
    }

    render(){
        let { comments, error, errorMessage, postId } = this.state


        return(
            <div className="comment-container">
                <PostCommetForm postId={postId} updateComments={this.getPostComments}/>
                <CommentList comments={comments} userview={false}/>
            </div>
        )
    }
}

export default CommentScene