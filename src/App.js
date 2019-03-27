import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import UserForm from './scenes/Sign/index'
import NavBar from './scenes/Home/scenes/NavBar'
import Home from './scenes/Home/scenes/Home'

class App extends Component {
  render() {
    return (
      <div className="">
      <NavBar />
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/user/:page"  component={UserForm}/>
      </Switch>
      </div>
    );
  }
}

export default App;
