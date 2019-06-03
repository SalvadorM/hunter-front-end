import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'

const Auth = require('../../../utilities/authentication')


class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            error: '',
            cbResponce: '',
            loading: false,
            user: {
                username: '',
                password: '',
            }
        }
    }

    //change info in input change
    onChange = (e) => {
        e.preventDefault()

        const userInfo = this.state.user
        const field = e.target.name 
        userInfo[field] = e.target.value

        this.setState({user: userInfo})
    }

    //handle login request
    onLoginRequest = async (e) => {
        //show loading bar 
        this.setState({loading: true})
        e.preventDefault()
        const userInfo = this.state.user
        try{
            const userResponce = await Auth.authenticateUser(userInfo)
            //redirect to user page
            if(userResponce.status === 200){
                this.setState((prev) => (
                    {
                        cbResponce: !prev.cbResponce,
                        loading: false,
                    }))
            }
        }
        catch(err){
            //no match found 
            //incorrect email or password
            this.setState(
                {
                    error: 'Incorrect password or username', 
                    cbResponce: false,
                    loading: false,
                })
        }
    } 
    render(){  

        const {loading, error, cbResponce } = this.state

        //handle error 
        const errorMessage = (error)? <h2>{error}</h2> : <h2>Log In</h2>
        
        //handle the loading btn info
        if(cbResponce) return (<Redirect to='/home' />)

        return(
        <div>  
            <form>
                {errorMessage}
            <div className="form-group">
                <input name="username" type="text" className="form-control" onChange={this.onChange}  placeholder="username"></input>
            </div>
            <div className="form-group">
                <input name="password" type="password" className="form-control" onChange={this.onChange}  placeholder="Password"></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.onLoginRequest}>Submit</button>
            <br/>
            <br/>


            </form>
        </div>
        )
    }
}

export default LoginForm