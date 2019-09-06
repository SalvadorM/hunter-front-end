import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

import {createUserAccount} from '../functions/index'

class RegisterForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            userInfo: {
                username: '',
                email: '',
                name: '',
                password: '',
                password2: '',
            },
            cbResponce: false,
            errorMessage: '',
            passwordsMatch: false,
        }

        this.onCreateAccountRequest = this.onCreateAccountRequest.bind(this)
        this.onChange = this.onChange.bind(this)
        this.passwordsMatch = this.passwordsMatch.bind(this)
    }

    passwordsMatch(){
        const pass = this.state.userInfo.password
        const pass2 = this.state.userInfo.password2

        if(pass === pass2){
            this.setState({passwordsMatch: true})
        }else {
            this.setState({passwordsMatch: false})
        }
    }

    async onCreateAccountRequest(e){
        e.preventDefault()
        const passwordsMatch = this.state.passwordsMatch
        if(passwordsMatch){
            const accountInfo = {
                name: this.state.userInfo.name,
                email: this.state.userInfo.email,
                username: this.state.userInfo.username,
                password: this.state.userInfo.password,
            }
            try{
                const accountResponce = await createUserAccount(accountInfo)
                let resData = accountResponce.data
                console.log(resData)
                if(accountResponce.status === 200 && !resData.error){
                    this.setState({
                        cbResponce: true,
                        error: false
                    })
                }else {
                    this.setState({
                        error: true,
                        errorMessage: resData.errorMessage
                    })
                }
            }
            catch(err){
                //handle the error for username/emai taken, once we finish the back-end implementation
                console.log(err)
                this.setState({
                    error: 'information valid',
                })
            }
 
        }
        

    }

    onChange(e){
        e.preventDefault()
        const userInfo = this.state.userInfo
        const field = e.target.name
        userInfo[field] = e.target.value

        this.setState({userInfo, error: false},() => {
            if(field === 'password2'){
                this.passwordsMatch()
            }
        })
    }

    render(){
        const {cbResponce, error, errorMessage} = this.state

        let errorMessageView = (error)? <p>{errorMessage}</p> :<h2>Register Account</h2> 

        if(cbResponce){
            return(<Redirect to="/user/login" />)
        }   
        else {
            return(
                <div className="container text-center">
                    <form>
                    <div className="error-message">{errorMessageView}</div>
                    <div className="form-group">
                        <input type="text" name="name" className="form-control" onChange={this.onChange} placeholder="first name"></input>
                    </div>
        
                    <div className="form-group">
                        <input type="email" name="email" className="form-control" onChange={this.onChange} placeholder="email"></input>
                    </div>
        
        
                    <div className="form-group">
                        <input type="text" name="username" className="form-control" onChange={this.onChange} placeholder="username"></input>
                    </div>
        
        
                    <div className="form-group">
                        <input type="password" name="password" className="form-control" onChange={this.onChange} placeholder="password"></input>
                    </div>
        
                    <div className="form-group">
                        <input type="password" name="password2" className="form-control" onChange={this.onChange} placeholder="repeat password"></input>
                    </div>
        
        
                    <button type="submit" className="btn btn-primary" onClick={this.onCreateAccountRequest}>Create Account</button>
                    </form>
                </div>)
        }
    }
}

export default RegisterForm