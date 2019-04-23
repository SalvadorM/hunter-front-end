import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

//components
import UserForm from './scenes/Sign/index'
import NavBar from './scenes/Home/scenes/NavBar'
import Home from './scenes/Home/scenes/HomeLanding'
import CourseForm from './scenes/Forms/multi-course/CourseForm'
import TEST from './scenes/Home/scenes/private'
import CourseScene from './scenes/courses/scenes/CourseScene'
import CreatePost from './scenes/post/scene/CreatePost'
import PostScene from './scenes/post/scene/PostScene'
//private router
import {PrivateRouter} from './utilities/privateRouter'


class App extends Component {
  render() {
    return (
      <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/user/:page"  component={UserForm}/>
        <PrivateRouter exact path="/home" component={Home} />
        <PrivateRouter exact path="/course/submit/" component={CourseForm} />
        <PrivateRouter exact path="/post/:classcode" component={CreatePost} />
        <PrivateRouter exact path="/post/view/:postid" component={PostScene} />
        <PrivateRouter exact path="/course/:classcode" component={CourseScene} />
        <PrivateRouter exact path="/test" component={TEST} />
      </Switch>
      </div>
    );
  }
}

export default App;
