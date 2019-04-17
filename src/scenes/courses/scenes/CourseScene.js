import React, { Component } from 'react'

import {getCourseInformation, getCourseStudents} from '../functions/index'

import { Link } from 'react-router-dom'

class CourseScene extends Component {
    constructor(props){
        super(props)

        this.state = {
            courseSection: [],
            className: '',
            information: '',
            students: [],
            year: new Date().getFullYear(),
            season: '',
            error: false,
            errorMessage: '',
            cbResponce: false,
        }
    }

    async componentDidMount(){
        try{
            let classcode = this.props.match.params.classcode
            let { season, year } = this.props.location.state
            /*
                if props state is undefinded render new season form with updated season and year
            */ 
            let courseInfo = await getCourseInformation(classcode)
            let students = await getCourseStudents(classcode, season, year)
            let courseStudents  = students.data.map(val => {
                let student = {
                    userId: val.user.id,
                    username: val.user.username,
                    name: val.user.name
                }
                return student
            })
            this.setState({
                // courseInfo: courseInfo.data,
                // students: students.data,
                className: courseInfo.data[0].className,
                information: courseInfo.data[0].information,
                students: courseStudents,
                year, 
                season,
            })
        }
        catch(err){
            console.log(err)
        }
    }   

    render(){

        console.log(this.state)
        let { className, information, students } = this.state
        let renderStudents = students.map((val,i) => {
            return(
                <div className="card" key={i}>
                    <div className="card-body">
                    <h5 className="card-title">{val.username}</h5>
                    <p className="card-text">Section: {val.name}</p>
                    <Link to="#" className="btn btn-primary"/>
                    </div>
                </div>)
            
        })
        // console.log(students, courseInfo)
        return(
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{className}</h1>
                <hr className="my-4"/>
                <p>{information}</p>
                <br />
            </div>
            <div>
                <h3>Students</h3>
                {renderStudents}
            </div>
            <div>
                <h3>posts</h3>
                <div className="card">
                    <div className="card-body">
                    <h5 className="card-title">Post</h5>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default CourseScene