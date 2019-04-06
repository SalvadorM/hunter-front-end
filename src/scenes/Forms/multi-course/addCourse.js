import React, {Component} from 'react'

//components
import SingleCourseForm from './singleCourseForm';

function getIndexArr(courses, index){
    return courses[index]
}
class AddCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courseStp: 0,
            courses: [],
        }
    }

    nextCourseStp = () => {
        this.setState( (prev) => ({
            courseStp: prev.courseStp + 1
        }))
    }

    prevCourseStp = () => {
        this.setState( (prev) => ({
            courseStp: prev.courseStp - 1
        }))
    }
    addCourseToSet = (data) => {
        const {courses} = this.state
        const newCourses = courses.concat(data)
        this.setState({courses: newCourses})
    }

    render(){
        const {courseStp, courses} = this.state
        let renderNewCourse = (courses.length > 0)? true : false
        // let prevStatus = (courseStp === 0) 
        let course = getIndexArr(courses, courseStp)
        return(
            <SingleCourseForm 
                renderNewCourse={renderNewCourse} 
                numberCoureses={courses.length}
                course={course}
                addCourseToSet={this.addCourseToSet}
                nextCourseStp={this.nextCourseStp} 
                prevCourseStp={this.prevCourseStp}
            />
        )
    }
}

export default AddCourse