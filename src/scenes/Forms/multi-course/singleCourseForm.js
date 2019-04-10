import React, {Component} from 'react'

class SingleCourseForm extends Component {
    constructor(props){
        super(props)

        this.state = {
            classCode: '',
            className: '',
            information: '',
            section: '',
        }

    

    }

    handleNextCourse = () => {
        // parse the info FIRST
        const {classCode, className, information, section} = this.state
        const data = {classCode,className,information, section}
        this.props.addCourseToSet(data)
        this.setState({
                    classCode: '',
                    className: '',
                    information: '',
                    section: '',
                })
    }

    onChange = (e) => {
        e.preventDefault()
        const field = e.target.name
        this.setState({[field]: e.target.value})
    }

    render(){  
        let {classCode, className, information, section} = this.state
        let prevBtn = (this.props.courseStp === -1)?<span></span> : <button type="submit" className="btn btn-primary" onClick={this.props.prevCourseStp}>Prev</button> 
        
        return(
        <div className="container text-center">
            <h1>New Course</h1>

            <label className="">Enter classCode: </label>
            <input name="classCode"
                   placeholder={classCode}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>
            
            <label className="">Enter className: </label>
            <input name="className" 
                   placeholder={className}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>

            <label className="">Enter section: </label>
            <input name="section" 
                   placeholder={section}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>

            <label className="">Enter informatio: </label>
            <input name="information" 
                   placeholder={information}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>

                {prevBtn}
                <button type="submit" className="btn btn-primary" onClick={this.handleNextCourse}>Next Course</button>
                <button type="submit" className="btn btn-primary">Done</button>


            </div>
        )
    }
}

export default SingleCourseForm