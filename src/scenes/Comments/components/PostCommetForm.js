import React, {Component} from 'react'

//functions 
import { postComment } from '../functions'

class PostCommetForm extends Component {
    
    constructor(props){
        super(props)
        
        this.state = {
            body: '',
            inputValue: '',
        }
    }

    onChange(e){
        let {body, inputValue} = this.state
        body = e.target.value
        inputValue = e.target.value
        this.setState({body, inputValue})
    }

    onSubmit = async (e) => {
        try{
            e.preventDefault()

            const postId = this.props.postId
            const commentBody = this.state.body
    
            let newComment = {postId, commentBody}
            
            let commentRes = await postComment(newComment)

            if(commentRes.status === 200){
                this.setState({
                    inputValue: '',
                    body: '',
                })
                this.props.updateComments()
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
        const {inputValue} = this.state
        return(
                <div className=""> 
                    <div className="col-12"> 
                    <input className="form-control"
                           onChange = { (e) => this.onChange(e)}
                           value={inputValue}
                           required></input></div>
                    <div className="col-12 text-center"><button className="btn btn-primary mt-2" type="submit" onClick={(e) => this.onSubmit(e)}>Comment</button></div>
                </div>
        )
    }
}

export default PostCommetForm