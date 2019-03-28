import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

class RegisterForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: '',
            email: '',
            name: '',
            password: '',
            password2: '',
            cbResponce: false,
            error: '',
        }
    }

    passwordsMacth(){

    }

    onCreateAccountRequest(){

    }

    onChange(){

    }

    render(){
        return(
        <div>
            <form>
            <div className="form-group">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="Name"></input>
            </div>

            <div className="form-group">
                <input type="email" className="form-control" aria-describedby="emailHelp" placeholder="email"></input>
            </div>


            <div className="form-group">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="username"></input>
            </div>


            <div className="form-group">
                <input type="text" className="form-control" aria-describedby="emailHelp" placeholder="password"></input>
            </div>


            <button type="submit" className="btn btn-primary">Create Account</button>
            </form>
        </div>)
    }
}

export default RegisterForm