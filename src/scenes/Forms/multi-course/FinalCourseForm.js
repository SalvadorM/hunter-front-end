import React, {Component} from 'react'





function IndividualCourse(props){
    let info = props.course
    return(
        <div>
        <h2>{info.className}</h2>
        <p>{info.section}</p>
        </div>
    )
}



class FinalCourseForm extends Component {
    render(){

        let courses = this.props.coursesInfo

        let showCourses = courses.map(course => {
            return(<IndividualCourse course={course} key={course.courseId}/>)
        })

        return(
        <div>
            <h2>New Landing Component</h2>
            <h4>See || add Friends</h4>
            <h4>Added Courses</h4>
            {showCourses}
        </div>
        )
    }

}

export default FinalCourseForm