import React, {Component} from 'react'

//react router 
import {Redirect} from 'react-router-dom'

//components
import SingleCourseForm from './singleCourseForm'

import {addNewUserCourse} from '../functions/createCourse'

class AddCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courses: this.props.courses,
            error: '',
            formDone: false,
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
                // const newCourseInfo = {
                //     courseId: newCourseResponce.data.id,
                //     className: newCourseResponce.data.className,
                //     section: newCourseResponce.data.section,

                // }
                // // this.props.addNewCourseInfo(newCourseInfo)
                this.setState({
                    formDone: true,
                })
            }
            //some other error to handle  
         }
         catch(err){
             console.log(err)
             //send error to root 
         }
    }

    render(){
        let currStp = this.props.courseStp

        let {formDone} = this.state

            
        if(formDone){
            return(<Redirect to="/" />)
        }

        return(
            <div>               
            <SingleCourseForm 
                course={this.props.currentCourse}
                courseStp={currStp}
                courseInfoLen={this.props.courseInfoLen}
                addNewUserCourse={this.addNewUserCourse}

            />
            {/* <button className="btn btn-primary text-center" onClick={this.props.nextStp}>Done</button> */}

            </div>

        )
    }
}

export default AddCourse