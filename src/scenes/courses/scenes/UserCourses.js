import React, {Component} from 'react'

class UserCourses extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const courses = this.props.courses

        const CoursesToRender = courses.map((val,i) => {
            return(<div key={i}>
                <h3>{val.className}</h3>
                <p>{val.section}</p>
            </div>)
        })
        return(
            <div>   
                {CoursesToRender}
            </div>
        )
    }
}

export default UserCourses