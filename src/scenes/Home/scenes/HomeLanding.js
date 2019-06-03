import React, {Component} from 'react'


//functions 
import {getCurrentClasses} from '../functions/index'
import UserCourses from '../../courses/scene/UserCourses';
import ViewUserFriends from '../../Friendship/scene/ViewUserFriends';
import ViewUserComments from '../../Comments/scene/ViewUserComments'
import ViewUserPosts from '../../post/scene/ViewUserPosts'
import ViewFriendRequests from '../../Friendship/scene/ViewFriendRequests';

class Home extends Component {
    constructor(props){
        super(props)

        this.state = {
            username: localStorage.getItem('username'),
            classes: [],
            cbResponce: false,
            season: 'spring',
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
        let currentUser = localStorage.getItem('userId')
        return(
            <div className="container">
                <div className="jumbotron">
                    <div className="col-12-xs text-center">
                    <h1>Hi {username}!</h1>

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
        
                    <UserCourses courses={classes} season={season} year={year}/>

                    <ViewUserFriends currentUser={currentUser} profileView={false}/>
                    <ViewFriendRequests />
                    <ViewUserPosts currentUser={currentUser} />
                    <ViewUserComments currentUser={currentUser} />
                </div>
            </div>
        )
    }
}

export default Home