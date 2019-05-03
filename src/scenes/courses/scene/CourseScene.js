import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import {getCourseInformation, getCourseStudents} from '../functions/index'
import UserInfoDisplay from '../components/userInfo'
import SectionSelectionComponent from '../components/sectionSelection'
import CoursePosts from '../../post/scene/CoursePosts';


//make one function to set state

class CourseScene extends Component {
    constructor(props){
        super(props)

        this.state = {
            courseSections: [],
            currentSection: '',
            section: '',
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

    componentDidMount(){
            if(!this.props.location.state){
                this.getCourseByClassCode()
            }else {
                let { season, year, section } = this.props.location.state
                this.updateNewInfo(section, season, year)
            }
    }   

    getCourseByClassCode = async () => {
        //send to semester and year form 
        //or redirect to home 
        this.props.history.push(`/home`)
    }

    updateNewInfo = async (section, season, year) => {
        try{ 
            let classcode = this.props.match.params.classcode

            let courseInfo = await getCourseInformation(classcode)
            let students = await getCourseStudents(classcode, season, year, section)

            let courseStudents  = students.data.map(val => {
                let student = {
                    userId: val.user.id,
                    username: val.user.username,
                    name: val.user.name
                }
                return student
            })

            let courseSection = courseInfo.data.map(val => {
                let info = { courseId: val.id, section: val.section }
                return info
            })

            //set first course as default 
            this.setState({
                className: courseInfo.data[0].className,
                information: courseInfo.data[0].information,
                currentCourseId: courseInfo.data[0].id,
                currentSection: courseInfo.data[0].section,
                students: courseStudents,
                courseSection,
                year, 
                season,
            })
        }
        catch(err){
            console.log(err)
        }
    }

    updateSection = async (section) => {
        try{
            //only fetching section students
            const classcode = this.props.match.params.classcode
            const {season, year} = this.state

            let students = await getCourseStudents(classcode, season, year, section)

            let courseStudents  = students.data.map(val => {
                let student = {
                    userId: val.user.id,
                    username: val.user.username,
                    name: val.user.name
                }
                return student
            })

            this.setState({
                students: courseStudents
            })

        }
        catch(err){
            console.log(err)
        }
    }

    render(){
        let { className, information, students, currentSection, courseSection } = this.state
        let classCode = this.props.match.params.classcode
        let renderStudents = students.map((val,i) => { return( <UserInfoDisplay student={val} key={i}/>) })


        return(
            <div className="container">
            <div className="jumbotron">
                <h1 className="display-4">{className}</h1>
                <hr className="my-4"/>
                <p>{information}</p>
                <p>{currentSection}</p>
                <br />
                <p>select section</p>
                <SectionSelectionComponent currentSection={currentSection} courseSection={courseSection} updateSection={this.updateSection}/>

                <br />
            </div>
            
            <div className="students-container">
                <h3>Students</h3>
                {renderStudents}
            </div>
            <div className="posts-container container">
                <Link to={{ pathname: `/post/${classCode}`, state: { className } }} className="btn btn-info">Create Post</Link>
                
                <h3>posts</h3>
                <CoursePosts classCode={classCode} />
            </div>
            </div>
        )
    }
}

export default CourseScene