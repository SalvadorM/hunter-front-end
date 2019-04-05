import React, {Component} from 'react'


class AddCourse extends Component {
    constructor(props){
        super(props)

        console.log(props,'inside constructor')
        this.state = {
            classCode: '',
            className: '',
            information: '',
            section: '',
        }
    }

    onChange = (e) => {
        e.preventDefault()
        const field = e.target.name
        this.setState({[field]: e.target.value})
    }

    nextCourse = () => {
        const cour = ['hiiiiiiiii']
        this.props.addCourse(cour)
        this.props.nextStp()
    }
    render(){
        console.log(this.props)
        return(
            <div className="container text-center">
                <h1>New Course</h1>

                <label className="">Enter classCode: </label>
                <input name="classCode" 
                       className="form-control w-50"
                       type="text"
                       onChange={this.onChange}
                       required
                       ></input>
                
                <label className="">Enter className: </label>
                <input name="className" 
                       className="form-control w-50"
                       type="text"
                       onChange={this.onChange}
                       required
                       ></input>

                <label className="">Enter section: </label>
                <input name="section" 
                       className="form-control w-50"
                       type="text"
                       onChange={this.onChange}
                       required
                       ></input>

                <label className="">Enter informatio: </label>
                <input name="information" 
                       className="form-control w-50"
                       type="text"
                       onChange={this.onChange}
                       required
                       ></input>

                <button type="submit" className="btn btn-primary" onClick={this.props.prevStp}>Prev</button>
                <button type="submit" className="btn btn-primary" onClick={this.nextCourse}>Next</button>
                <button type="submit" className="btn btn-primary">Done</button>


            </div>
        )
    }
}

export default AddCourse