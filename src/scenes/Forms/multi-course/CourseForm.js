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

class CourseForm extends Component {
    constructor(){
        super()

        this.state = {
            year: new Date().getFullYear(),
            semesterInfo: '',
            courses: [],
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

    addCourse = (courses) => {
        console.log(courses)
        this.setState({courses: courses})
    }
    
    render(){
        console.log(this.state)
        const {step, courses} = this.state

        switch(step){
            case -1:
                return(
                    <div>ERRROR</div>
                )
            case 0:
                return(
                    <div><WelcomeCourseForm addCourseDate={this.addCourseDate} nextStp={this.nextStp}/>
                    </div>
                )
            case 1:
                return(
                    <div className="container">
                        <h1 className="display-4">Add Courses</h1>
                        <AddCourse  prevStp={this.prevStp} nextStp={this.nextStp} courses={courses} addCourse={this.addCourse}/>
                    </div>
                )
            case 2:
            return(
                <div>
                    <h3>Confirm classes</h3>
                    <button type="submit" className="btn btn-primary">Done</button>
                </div>
            )
        }
    }
}


export default CourseForm