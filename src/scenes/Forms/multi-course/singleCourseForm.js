import React, {Component} from 'react'
//react router 
import {Link} from 'react-router-dom'


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
    addUserCourse = (e) => {
        e.preventDefault()
        const {classCode, className, information, section} = this.state
        const data = {classCode,className,information, section}
        this.props.addNewUserCourse(data)
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
    
        return(
        <div className="container text-center">
            <h1>New Course</h1>

            <label className="">Enter classCode: </label>
            <input name="classCode"
                   value={classCode}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>
            
            <label className="">Enter className: </label>
            <input name="className" 
                   value={className}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>

            <label className="">Enter section: </label>
            <input name="section" 
                   value={section}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>

            <label className="">Enter information: </label>
            <input name="information" 
                   value={information}
                   className="form-control w-50"
                   type="text"
                   onChange={this.onChange}
                   required
                   ></input>
                <br/>
                <a className="btn btn-danger" href="/course/submit">Cancel</a>
                <br/>
                <br/>

                <button type="submit" className="btn btn-primary" onClick={this.addUserCourse}>Add Course</button>

            </div>
        )
    }
}

export default SingleCourseForm