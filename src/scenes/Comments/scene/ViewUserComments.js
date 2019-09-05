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

       let { comments } = this.state
       let commentList
       if (comments.length === 0) {

        commentList = (<span />)

       } else {
        commentList = comments.map((val,i) => { 

            return(
                <div className="col-6" key={i}>
                    <div className="post-card card">
                        <div className="card-body">
                        <h5 className="card-title text-truncate">{val.body}</h5>
                        <Link to={`/post/view/${val.postId}`} className="btn btn-outline-primary btn-view">view</Link>
                        </div>
                    </div>
                </div>
            )
        })
            
       }        
        return(
            <div className="comments-container text-center">
                <div className="information-badge">
                    Comments <span className="badge">{comments.length}</span>
                </div>
                <div className="container">
                    <div className="row">{commentList}</div>

                </div>
            </div>
        )
    }
}

export default ViewUserComments 