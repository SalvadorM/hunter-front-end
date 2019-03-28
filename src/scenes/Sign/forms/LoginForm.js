import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
            error: '',
            cbResponce: '',
        }
        console.log(this.props)
    }

    onChange(){

    }

    onLoginRequest(){

    }
    render(){
        return(
        <div>
            <form>
            <div className="form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email"></input>
            </div>
            <div className="form-group">
                <input type="password" className="form-control" placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        )
    }
}

export default LoginForm