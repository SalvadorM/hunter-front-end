import React, { Component } from 'react'

//functions 
import { getUserCommentsByUserId } from '../functions/index'
//router 
import { Link } from 'react-router-dom'

class ViewUserComments extends Component {
    constructor(props){
        super(props)

        this.state = {
            comments: [],
            error: false,
            errorMessage: '',
        }
    }

    componentDidMount(){
        this.getUserComments()
    }

    getUserComments = async () => {
        try{
            let currentUser = this.props.currentUser

            let commentRes = await getUserCommentsByUserId(currentUser)
            
            if(commentRes.status === 200){
                this.setState({
                    comments: commentRes.data
                })
            }else{
                this.setState({
                    error: true, 
                    errorMessage: 'There was an error getting information from database, try again'
                })
            }
        }
        catch(err){
            console.log(err)
            this.setState({
                error: true, 
                errorMessage: 'There was an error getting information from database, try again'
            })
        }
    }

    render(){

       let { comments, error, errorMessage } = this.state
       let commentList
       if(comments.length === 0){
        commentList = (
               <div className="">
                   <h5>No comments</h5>
               </div>
           )
       }else {
        commentList = comments.map((val,i) => { 
            return(
                <div className="post-card col-6 card" key={i}>
                <div className="card-body">
                    <h5 className="card-title text-truncate">{val.body}</h5>
                    <Link to={`/post/view/${val.postId}`} className="btn btn-outline-info">view comment</Link>
                </div>
            </div>
            )
        })
            
       }        
        return(
            <div className="container user-comments-container">
                <div className="row text-center">
                {commentList}
                </div>
            </div>
        )
    }
}

export default ViewUserComments 