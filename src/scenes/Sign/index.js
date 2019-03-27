import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
//compoenents
import LoginForm from './forms/Login'
import RegisterForm from './forms/Register'
//styles
import '../../stylesheets/userform/userform.scss'

class UserForm extends Component {

    // Add a callback function that can render the problems the parent component
    render(){

        const currentPage = this.props.match.params.page

        console.log(currentPage)
        return(
        <div className="flex-container">
            <div className="row">
                <div className="flex-item">YOOOO </div>
            </div>
        </div>
        )



        // test the url to render correct form in single page 
        //loginform and register form return only FORMS!
        // if(currentPage === 'login') {
        //     return(<LoginForm />)
        // } else if(currentPage === 'register'){
        //     return(<RegisterForm />)
        // }else {
        //     return(<Redirect to="/home"/>)
        // }  
    }
}

export default UserForm