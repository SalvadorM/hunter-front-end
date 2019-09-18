import React, {Component} from 'react'
import {Redirect, NavLink} from 'react-router-dom'
//components
import LoginForm from './forms/LoginForm'
import RegisterForm from './forms/RegisterForm'
//styles
import '../../stylesheets/userform.scss'

//functions

class UserForm extends Component {
    constructor(){
        super()

        //callback functions 
        this.handleLoginRequest = this.handleLoginRequest.bind(this)
        this.handleRegisterRequest = this.handleRegisterRequest.bind(this)

    }
    
    async handleRegisterRequest(){

    }

    async handleLoginRequest(){

    }
    // Add a callback function that can render the problems the parent component
    render(){

        const currentPage = this.props.match.params.page

        let currentForm =<div></div>

        // test the url to render correct form in single page 
        // loginform and register form return only FORMS!
        if(currentPage === 'login') {
            currentForm = (<LoginForm action={this.handleLoginRequest}/>)
        } else if(currentPage === 'register'){
            currentForm = (<RegisterForm action={this.handleRegisterRequest}/>)
        }else {
            currentForm = (<Redirect to="/home"/>)
        }  
        
        return(
        <div className="flex-container">
            <h3 className="help-message"><a href="https://github.com/SalvadorM/hunter-front-end" target="_blank">Find more information about how to user ClassHub </a></h3>

                <div className="flex-item">
                <div className="register-form">
                    <div className="form">
                        <nav className="nav nav-tabs">
                            <NavLink to="/user/login" activeClassName="active" className="nav-link">Sign In</NavLink>
                            <NavLink to="/user/register" activeClassName="active" className="nav-link">Register</NavLink>
                        </nav>
                        <div className="form-content">
                            {currentForm}
                        </div>
                    </div>
                </div>
                </div>
                <h3 className="help-message2"><a href="https://github.com/SalvadorM/hunter-front-end#errors" className="bottom-message" target="_blank">App does not work properly in safari or mobile browsers </a></h3>

        </div>
        )



    }
}

export default UserForm