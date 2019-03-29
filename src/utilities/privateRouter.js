import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'

const Auth = require('../utilities/authentication')

export const PrivateRouter = ( {component: Component, ...rest }) => {
    return(
        <Route {...rest} render={(props) => (
            Auth.isAuthenticated() ? (<Component {...props}/>) : (<Redirect to="/user/login"/>) 
        )} />
    )
}