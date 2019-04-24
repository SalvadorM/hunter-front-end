import React, { Component } from 'react'


class PostForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            title: '',
            body: '',
            formDone: false,
        }
    }

    onChange = (e) => {
        let field = e.target.name
        let value = e.target.value
        this.setState({
            [field]: value
        })
        this.checkInfo()
    }

    checkInfo = (e) => {
        let { title, body } = this.state
        if(title.length > 0 && body.length > 0){
            this.setState({formDone: true})
        }else {
            this.setState({formDone: false})
        }
    }

    sendInfo = (e) => {
        e.preventDefault()
        let { title, body } = this.state
        this.props.createNewClassPost(title, body)
    }
    render(){
        let { formDone } =  this.state
        let showPostBtn = (formDone) ? <button className="btn btn-primary" onClick={this.sendInfo}>Post It</button> : <span/>

        return(
            <div className="container">
            <div className="container text-center">
            <form className="form-group">
            <div className="">

                <label className="">title</label>
                <input name="title" 
                       className="form-control"
                       type="text"
                       onChange = {this.onChange}
                       required
                       ></input>

                <label className="">Body</label>
                <textarea name="body" 
                       className="form-control"
                       type="text"
                       rows="3"
                       onChange = {this.onChange}
                       required
                       ></textarea>
                <br></br>
            </div >

            <div className="btn-section">
            {showPostBtn}
            </div>

 
            </form>
            </div>
            </div>

        )
    }
}

export default PostForm