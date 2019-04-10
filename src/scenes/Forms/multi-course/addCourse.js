import React, {Component} from 'react'

//components
import SingleCourseForm from './singleCourseForm';


class AddCourse extends Component {
    constructor(props){
        super(props)

        this.state = {
            courses: this.props.courses,
            error: '',
            renderCleanNote: true,
        }
    }

    addCourseToSet = (data) => {
        this.props.addNewCourseInfo(data)
        // this.props.nextStp()
        this.setState({renderCleanNote: false})
        this.props.nextStp()
    }

    changeBackToSemester = () => {
        this.props.changeToSemester()
    }

    render(){
        let currStp = this.props.courseStp
        let changeSemester = (currStp === -1)? <button className="btn btn-primary" onClick={this.changeBackToSemester}>Change Semester</button> : <span></span>

        return(
            <div>
            {changeSemester}
                
            <SingleCourseForm 
                course={this.props.currentCourse}
                courseStp={currStp}
                courseInfoLen={this.props.courseInfoLen}
                addCourseToSet={this.addCourseToSet}
                prevCourseStp={this.props.prevStp}
            />
            </div>

        )
    }
}

export default AddCourse