import React, {Component} from 'react'

//components
import SingleCourseForm from './singleCourseForm'

import {addNewUserCourse} from '../functions/createCourse'

class AddCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courses: this.props.courses,
            error: '',
        }
    }

    addNewUserCourse = async (data) => {
         //add courseId to CourseForm 
         let courseToAdd = {
            season: this.props.semester,
             year: this.props.year,
             ...data
         }
         try{
            const newCourseResponce = await addNewUserCourse(courseToAdd)
            if(newCourseResponce.status === 200){
                const newCourseInfo = {
                    courseId: newCourseResponce.data.id,
                    className: newCourseResponce.data.className,
                    section: newCourseResponce.data.section,

                }
                this.props.addNewCourseInfo(newCourseInfo)
            }
            //some other error to handle  
         }
         catch(err){
             console.log(err)
             //send error to root 
         }
    }

    changeBackToSemester = () => {
        this.props.changeToSemester()
    }
    
    render(){
        let currStp = this.props.courseStp

        return(
            <div> 
            <div>
            <button className="btn btn-primary text-center" onClick={this.changeBackToSemester}>Change Semester</button>
            </div>               
            <SingleCourseForm 
                course={this.props.currentCourse}
                courseStp={currStp}
                courseInfoLen={this.props.courseInfoLen}
                addNewUserCourse={this.addNewUserCourse}
            />
            <button className="btn btn-primary text-center" onClick={this.props.nextStp}>Done</button>

            </div>

        )
    }
}

export default AddCourse