import React, { Component } from 'react'

//components
import PostForm from '../components/PostForm';
//react router
import { Link } from 'react-router-dom'
//functions
import { createNewClassPost } from '../functions/index'

class CreateNote extends Component{
    constructor(props){
        super(props)

        this.state = {
            classCode: this.props.match.params.classcode,
            error: false,
            errorMessage:'',
        }
    }

    createNewClassPost = async (title, body) => {
        try{
            let { classCode } = this.state

                let postInfo = { title, body, classCode }
                this.props.history.goBack()
                let postResponce  = await createNewClassPost(postInfo)
                if(postResponce.status === 200){
                    this.props.history.goBack()
                }else {
                    this.setState({
                        error: true,
                        errorMessage: 'There was an error posting'
                    })
                }
        }
        catch(err){
            this.setState({
                error: true,
                errorMessage: 'There was an error posting'
            })
        }

    }

    render(){
            let { error, errorMessage} = this.state

            if(error){
                return(
                    <div className="error container">
                    <h5>{errorMessage}</h5>
                    <Link to="/home" className="btn btn-outline-danger ">Cancel</Link>
                    </div>
                )
            }
            else{
                return(
                    <div className="posts-container text-center">
                        <h2>Post a new note</h2>
        
                        <PostForm  createNewClassPost={this.createNewClassPost} />

                        <Link to="/home" className="btn btn-danger ">Cancel</Link>

                    </div>
                )
            }

    }
}

export default CreateNote