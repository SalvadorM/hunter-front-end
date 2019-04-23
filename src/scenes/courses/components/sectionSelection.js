import React, { Component } from 'react'

class SectionSelectionComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            section: '',
        }
    }
    onChange = (e) => {
        e.preventDefault()
        const field = e.target.name
        this.setState({[field]: e.target.value})
        this.props.updateSection(e.target.value)
    }
    
    render(){
        let courseSections = this.props.courseSection
        let optionSections = <option value="1">1</option>
        if(courseSections) {
            optionSections = courseSections.map((val,i) => {
                return(<option value={val.section} key={i}>{val.section}</option>)
            })
        }
        const { section } = this.state
        return(
            <select className="form-control" name="section" value={section} onChange={this.onChange}>
            {optionSections}
            </select>
        )
    }

}

export default SectionSelectionComponent