import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class UserCourses extends Component {

    render(){
        let { season, year } = this.props
        const courses = this.props.courses
        let path
        let CoursesToRender = courses.map((val,i) => {
            path = `/course/${val.classCode}`
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                    <h5 className="card-title">{val.className}</h5>
                    <p className="card-text">Section: {val.section}</p>
                    <Link to={{
                            pathname: path,
                            state: {
                                season: season,
                                year: year,
                                courseId: val.id,
                                section: val.section
                            }       
                          }}
                          className="caret"/>
                    </div>
                </div>)
        })

        if (courses.length === 0) {
            path = `/course/submit/`
            CoursesToRender = (
                <div className="card">
                    <div className="card-body">
                    <p className="card-text">Sorry you have no classes</p>
                    <Link to={path} className="btn btn-primary">Add a class</Link>
                    </div>
                </div>
            )
        }
        return(
            <div className="courses-container text-center"> 
                <h4 className="my-2">Current classes</h4>
                <Link to="/course/submit" className="btn btn-primary my-3">Add Class</Link>
                {CoursesToRender}
            </div>
        )
    }
}

export default UserCourses