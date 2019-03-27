import React, {Component} from 'react'
import {Redirect, NavLink} from 'react-router-dom'
//compoenents
import LoginForm from './forms/Login'
import RegisterForm from './forms/Register'
//styles
import '../../stylesheets/userform/userform.scss'

class UserForm extends Component {

    // Add a callback function that can render the problems the parent component
    render(){

        const currentPage = this.props.match.params.page

        let currentForm =<div></div>

        // test the url to render correct form in single page 
        // loginform and register form return only FORMS!
        if(currentPage === 'login') {
            currentForm = (<LoginForm />)
        } else if(currentPage === 'register'){
            currentForm = (<RegisterForm />)
        }else {
            currentForm = (<Redirect to="/home"/>)
        }  

        console.log(currentPage)
        return(
        <div className="flex-container">
            <div className="row">
                <div className="flex-item">
                <div className="register-form">
                    <div className="form">
                        <nav className="nav nav-tabs">
                            <NavLink to="/user/login" activeClassName="active" className="nav-link">Sign In</NavLink>
                            <NavLink to="/user/register" activeClassName="active" className="nav-link">Register</NavLink>
                        </nav>
                        <div className="form-content">
                            {currentForm}
                            <button type="button" className="btnSubmit">Submit</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
        )



    }
}

export default UserForm