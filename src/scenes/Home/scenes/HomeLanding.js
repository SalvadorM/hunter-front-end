import React, {Component} from 'react'

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: localStorage.getItem('username'),
            classes: [],
            cbResponce: false,

        }
    }

    componentDidMount(){
      
    }
    render(){
        const { username } = this.state
        return(
            <div className="container">
                <div className="jumbotron">
                    <h1>Hello {username}</h1>
                    <h2>Render Current Classes</h2>
                    <h3>find friends </h3>
                    <h2>Render Post created by user</h2>
                    <h2>Render Friends</h2>
                    <h2>Render Comments</h2>
                </div>
            </div>
        )
    }
}

export default Home