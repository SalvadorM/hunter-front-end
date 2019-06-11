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

       let { posts, error, errorMessage } = this.state
       let postList
       if(posts.length === 0){
        postList = (<span/>)
       }else {
            postList = posts.map((val,i) => { 
                return(
                <div className="col-6" key={i}>
                    <div className="post-card card">
                        <div className="card-body">
                            <h5 className="card-title">{val.title}</h5>
                            <Link to={`/post/view/${val.id}`} className="btn btn-outline-info">view post</Link>
                        </div>
                    </div>
                </div>
                )
            })      
        }
        return(
        <div className="posts-container text-center">
            <div className="information-badge">
                Posts <span className="badge">{posts.length}</span>
            </div>
            <div className="container">
                <div className="row">{postList}</div>
            </div>
        </div>
        )
    }
}

export default ViewUserPosts