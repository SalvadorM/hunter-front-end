import React, {Component} from 'react'
import { withRouter, NavLink } from 'react-router-dom'

//stylesheets
import '../../../stylesheets/navbar.scss'

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

    render(){
        const {menuToggle} = this.state

        let navBarStyle = "navbar-nav"

        if(menuToggle){
            navBarStyle = "navbar-nav toggleMenu"
        }

        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                    <a className="navbar-brand" href="#">ClassHub</a>
                    <div className={navBarStyle}>
                            <div className="nav-item" onClick={this.handleMenuToggle}><NavLink to="/home" activeClassName="active" className="nav-link">Home</NavLink></div>
                            <div className="nav-item" onClick={this.handleMenuToggle}><NavLink to="/user/login" activeClassName="active" className="nav-link">Sign In</NavLink></div>
                    </div>
                    <div className="nav-toggler" onClick={this.handleMenuToggle}>
                            <span className="navbar-toggler-icon"></span>
                    </div>
                    </div>
                </nav>
        )
    }
}

export default withRouter(NavBar)