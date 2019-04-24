import React, { Component } from 'react'

//functions 
import { getUserPostByUserId } from '../functions/index'

//router
import { Link } from 'react-router-dom'
//components

class ViewUserPosts extends Component {
    constructor(props){
        super(props)

        this.state = {
            posts: [],
            error: true,
            errorMessage: '',
        }
    }

    componentDidMount(){
        this.getUserPosts()
    }

    getUserPosts = async () => {
        try{
            let currentUser = this.props.currentUser

            let postsRes = await getUserPostByUserId(currentUser)

            if(postsRes.status === 200){
                this.setState({
                    posts: postsRes.data
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

        /*


                <div className="post-card col-6 card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p><Link to={`/user/${postOwnerId}`}>Posted by: {usernameOwner}</Link></p>
                <Link to={`/post/view/${id}`} className="btn btn-outline-info">view post</Link>
            </div>
     

        </div>
        */
       let { posts, error, errorMessage } = this.state
       let postList
       if(posts.length === 0){
        postList = (
               <div className="text-center">
                   <h4>You have not posted yet</h4>
               </div>
           )
       }else {
            postList = posts.map((val,i) => { 
                return(
                <div className="post-card col-6 card" key={i}>
                    <div className="card-body">
                        <h5 className="card-title">{val.title}</h5>
                        <Link to={`/post/view/${val.id}`} className="btn btn-outline-info">view post</Link>
                    </div>
                </div>
                )
            })      
        }
        return(
        <div className="container user-comments-container">
            <p>Post by you</p>
            <div className="row"> 
            {postList}

            </div>
        </div>
        )
    }
}

export default ViewUserPosts