import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import UserForm from './scenes/Sign/index'
import NavBar from './scenes/Home/scenes/NavBar'
import Home from './scenes/Home/scenes/Home'
import TEST from './scenes/Home/scenes/private'

//private router
import {PrivateRouter} from './utilities/privateRouter'

class App extends Component {
  render() {
    return (
      <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/user/:page"  component={UserForm}/>
        <PrivateRouter exact path="/test" component={TEST} />
      </Switch>
      </div>
    );
  }
}

export default App;
