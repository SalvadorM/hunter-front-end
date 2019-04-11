import React, {Component} from 'react'

//react router 
import {Link} from 'react-router-dom'


class Home extends Component {
    render(){
        return(
            <div className="container">
                <div className="jumbotron">
                    <p>HOME</p>
                    <Link to="/course/submit">Add Course</Link>
                </div>
            </div>
        )
    }
}

export default Home