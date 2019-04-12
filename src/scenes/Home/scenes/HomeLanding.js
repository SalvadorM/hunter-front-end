import React, {Component} from 'react'


//functions 
import {getCurrentClasses} from '../functions/index'
import UserCourses from '../../courses/scenes/UserCourses';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: localStorage.getItem('username'),
            classes: [],
            cbResponce: false,
            season: 'fall',
            year: new Date().getFullYear()

        }
    }

    async componentDidMount(){
        const {season, year} = this.state
        this.getUserCourse(season, year)
    }
    getUserCourse = async (season, year) => {
        try{
            const classes = await getCurrentClasses(season, year)
            //add the rest
            console.log(classes.data)
            this.setState({classes: classes.data})
        }
        catch(err){
            console.log(err)
            //handle error 
        }
    }

    onchange = (e) => {
        e.preventDefault()
        const {season , year} = this.state
        const field = e.target.name
        this.setState({[field]: e.target.value})
        if(field == 'season'){
            this.getUserCourse(e.target.value, year)
        }else{
            this.getUserCourse(season, e.target.value)
        }
    }   

    render(){
        const { username, season, year, classes} = this.state
        return(
            <div className="container">
                <div className="jumbotron">
                    <div className="col-12-xs">
                    <select className="form-control" name="season" value={season} onChange={this.onchange}>
                        <option value="spring">Spring</option>
                        <option value="fall">Fall</option>
                        <option value="summer">Summer</option>
                        <option value="winter">Winter</option>
                    </select>
                    <select className="form-control" name="year" value={year} onChange={this.onchange}>
                        <option value="2019">2019</option>
                        <option value="2018">2018</option>
                        <option value="2017">2017</option>
                        <option value="2016">2016</option>
                    </select>
                    </div>
                    <h1>Hello {username}</h1>
                    <h2>Render Current Classes</h2>
                    <UserCourses courses={classes} />
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