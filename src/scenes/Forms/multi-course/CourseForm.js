import React, {Component} from 'react'

/*  
    1) YEAR AND SEMESTER (NEXT)
    2) RENDER ADDCOURSE
        A) (NEXT)
        B) (DONE)
    3) REPEAT TILL DONE

    -----------------------------

    at the end render all courses the user has 
        -iterate through each one and add them animation*
    each addcourse has to have the delete function to delete course or modify 


*/

//course form
import AddCourse from './addCourse'
import WelcomeCourseForm from './welcomeCourse'
import FinalCourseForm from './FinalCourseForm';

class CourseForm extends Component {
    constructor(){
        super()

        this.state = {
            year: new Date().getFullYear(),
            semesterInfo: '',
            coursesInfo: [],
            step: 0,
        }
    } 

    prevStp = () => {
        this.setState( (prev) => ({
            step: prev.step - 1
        }))
    }

    nextStp = () => {
        this.setState( (prev) => ({
            step: prev.step + 1
        }))
    }

    addCourseDate = (semesterInfo) => {
        this.setState({semesterInfo})

    }

    addNewCourseInfo = (newCourseInfo) => {
        const {coursesInfo} = this.state
        const newCoursesInfo = coursesInfo.concat(newCourseInfo)
        this.setState({coursesInfo: newCoursesInfo})
    }

    addCourseId = (courses) => {
        this.setState({courses: courses})
    }
    
    render(){
        const { year, semesterInfo, step, coursesInfo} = this.state
        switch(step){
            case -1:
                return(
                    <div>ERRROR</div>
                )
            case 0:
                return(
                    <div><WelcomeCourseForm 
                        nextStp={this.nextStp}
                        addCourseDate={this.addCourseDate}
                        />
                    </div>
                )
            case 1:
                return(
                    <div className="container">
                        <AddCourse 
                            semester={semesterInfo}
                            year={year}
                            addNewCourseInfo={this.addNewCourseInfo}
                            nextStp={this.nextStp}/>
                    </div>
                )
            case 2:
            return(
                <FinalCourseForm 
                    coursesInfo={coursesInfo}
                    semester={semesterInfo}
                    year={year}
                />
            )
            default: 
                console.log('Error no case')
        }
    }
}


export default CourseForm