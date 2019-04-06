import React, {Component} from 'react'

class WelcomeCourseForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            semesterInfo: 'spring',
        }
    }

    onchange = (e) => {
        e.preventDefault()
        const field = e.target.name
        this.setState({[field]: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {semesterInfo} = this.state
        this.props.addCourseDate(semesterInfo)
        this.props.nextStp()
    }
    render(){
        console.log(this.state)
        const {semester} = this.state
        return(
            <div className="container text-center">
            <h3>Welcome</h3>
            <label>Semester Season</label>
            <select className="form-control" name="semesterInfo" value={semester} onChange={this.onchange}>
                <option value="spring">Spring</option>
                <option value="fall">Fall</option>
                <option value="summer">Summer</option>
                <option value="winter">Winter</option>
            </select>

            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit}>Next</button>

            </div>
        )
    }
}

export default WelcomeCourseForm