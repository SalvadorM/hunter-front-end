import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
//compoenents
import LoginForm from './forms/Login'
import RegisterForm from './forms/Register'

class UserForm extends Component {

    // Add a callback function that can render the problems the parent component
    render(){

        const currentPage = this.props.match.params.page
        
        if(currentPage === 'login') {
            return(<LoginForm />)
        } else if(currentPage === 'register'){
          return(<RegisterForm />)
        }else {
            return(<Redirect to="/home"/>)
        }  
    }
}

export default UserForm