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
        //parse the info FIRST
        const {classCode, className, information, section} = this.state

        const data = {classCode,className,information, section}
        this.props.addCourseToSet(data)
        this.props.nextCourseStp()
    }

    onChange = (e) => {
        e.preventDefault()
        const field = e.target.name
        this.setState({[field]: e.target.value})
    }

    render(){
        console.log(this.props)
        const {classCode, className, information, section} = this.state

        let prevBtn = (this.props.numberCourses === 0 )?<button className="btn btn-primary" disabled>Prev</button> : <button type="submit" className="btn" onClick={this.nextCourse}>Prev</button> 

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

                <label className="">Enter informatio: </label>
                <input name="information" 
                       value={information}
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