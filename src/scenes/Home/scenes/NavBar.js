import React, {Component} from 'react'
import { withRouter, NavLink } from 'react-router-dom'

//stylesheets
import '../../../stylesheets/navbar.scss'


const Auth = require('../../../utilities/authentication')


class NavBar extends Component {
    constructor(){
        super()

        this.state = {
            menuToggle: false
        }

    }

    handleMenuToggle = () => {
        this.setState((prev) => ({
            menuToggle: !prev.menuToggle
        }))
    }

    handleLogOut = async (e) => {
        e.preventDefault()
        const responce = await Auth.signOut()
        console.log(responce)
        this.setState((prev) => ({
            menuToggle: !prev.menuToggle
        }))
        this.props.history.push('/user/login')
    } 
    render(){
        const {menuToggle} = this.state

        let navBarStyle = "navbar-nav"
        let menuIcon = (<span className="navbar-toggler-icon"></span>)

        let signInStatus = (<div className="nav-item" onClick={this.handleMenuToggle}><NavLink to="/user/login" activeClassName="active" className="nav-link">Sign In</NavLink></div>)

        if(localStorage.getItem('isAuthenticated')) {
            signInStatus = (<div className="nav-item" onClick={this.handleLogOut}><div className="nav-link">Log Out</div></div>)
        }

        if(menuToggle){
            navBarStyle = "navbar-nav toggleMenu"
            menuIcon = (<h3 id="menu-icon-close">&times;</h3>)
        }

        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="/home">ClassHub</a>
                    <div className={navBarStyle}>
                            <div className="nav-item" onClick={this.handleMenuToggle}><NavLink to="/home" activeClassName="active" className="nav-link">Home</NavLink></div>
                            {signInStatus}
                    </div>
                    <div className="nav-toggler" onClick={this.handleMenuToggle}>
                        {menuIcon}
                    </div>
                    </div>
                </nav>
        )
    }
}

export default withRouter(NavBar)