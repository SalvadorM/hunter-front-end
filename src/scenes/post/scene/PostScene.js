import React, { Component } from 'react'

//functions 
import {getPostById} from '../functions/index'

//router
import { Link } from 'react-router-dom'
import CommentScene from '../../Comments/scenes/CommentScene';
class PostScene extends Component {
    constructor(props){
        super(props)

        this.state = {
            title: '',
            body: '',
            usernameInfo: {},
            error: false,
            errorMessage: '',
            cbResponce: false,
        }
    }

    async componentDidMount(){
        try{
            let postId = this.props.match.params.postid
            let postRes = await getPostById(postId)
            if(postRes.status === 200){
                let post = postRes.data
                this.setState({
                    title:post.title,
                    body: post.body,
                    usernameInfo: post.user,
                    cbResponce: true,
                })
            }else {
                this.setState({
                    error: true,
                    errorMessage: 'Error getting post information, try again'
                })
            }
        }
        catch(err){
            console.log(err)
            this.setState({
                error: true,
                errorMessage: 'Error getting post information, try again'
            })
        }
    }

    render(){
        let { title, body, usernameInfo} = this.state
        let postId = this.props.match.params.postid
        return(
            <div className="container">
                <div className="user-container">
                    <Link to={`/user/${usernameInfo.id}`}>{usernameInfo.username}</Link>
                </div>
                <div className="post-container text-center my-4">
                    <h1 className="display-4">{title}</h1>
                    <hr className="my-4" />
                    <p className="lead">{body}</p>
                </div>
                <div className="comment-section">
                <CommentScene postId={postId}/>
                </div>
            </div>
        )
    }
}

export default PostScene