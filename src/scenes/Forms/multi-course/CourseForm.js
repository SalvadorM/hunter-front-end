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
            coursesInfo: [],
            step: 0,
            courseStp: -1,
        }
    } 

    prevCourseStp = () => {
        this.setState( (prev) => ({
            courseStp: prev.courseStp - 1
        }))
    }

    nextCourseStp = () => {
        // console.log('next course')
        this.setState( (prev) => ({
            courseStp: prev.courseStp + 1
        }))
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
        const {step, courses, year, semesterInfo, coursesInfo, courseStp} = this.state
        let currentCourse
        console.log(courseStp)
        // if(courseStp === -1 && coursesInfo[courseStp]){
        //     console.log('inside 1')
        //     currentCourse = {
        //         classCode: '',
        //         className: '',
        //         information: '',
        //         section: '',
        //     }
        // }else {
        //     console.log('inside 2')
        //     if(coursesInfo[courseStp + 1]){
        //         console.log('inside 3')
        //         currentCourse = coursesInfo[courseStp]
        //     }else {
        //         console.log('inside 4')

        //         currentCourse = {
        //             classCode: '',
        //             className: '',
        //             information: '',
        //             section: '',
        //         }
        //     }

        // }
        currentCourse = coursesInfo[courseStp + 1]
        if(!currentCourse){
            currentCourse = {
                        classCode: '',
                        className: '',
                        information: '',
                        section: '',
                    }
        }
        console.log(coursesInfo)
        console.log(currentCourse)
      
        switch(step){
            case -1:
                return(
                    <div>ERRROR</div>
                )
            case 0:
                return(
                    <div><WelcomeCourseForm 
                        addCourseDate={this.addCourseDate} 
                        nextStp={this.nextStp}
                        nextCourseStp={this.nextCourseStp}/>
                    </div>
                )
            case 1:
                return(
                    <div className="container">
                        <h1 className="display-4">Add Courses</h1>
                        <AddCourse 
                            changeToSemester={this.prevStp}
                            prevStp={this.prevCourseStp} 
                            nextStp={this.nextCourseStp} 
                            courses={courses} 
                            currentCourse={currentCourse}
                            courseStp={courseStp}
                            courseInfoLen={coursesInfo.length}
                            year={year}
                            season={semesterInfo}
                            addNewCourseInfo={this.addNewCourseInfo}/>
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