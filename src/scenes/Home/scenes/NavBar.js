import React, {Component} from 'react'
import { withRouter, NavLink } from 'react-router-dom'

class NavBar extends Component {

    render(){
        console.log(this.props.match)


        return(
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="container">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><NavLink to="/home" activeClassName="active" className="nav-link">Home</NavLink></li>
                            <li className="nav-item"><NavLink to="/user/login" activeClassName="active" className="nav-link">Sign In</NavLink></li>
                        </ul>
                    </div>
                </nav>
        )
    }
}

export default withRouter(NavBar)