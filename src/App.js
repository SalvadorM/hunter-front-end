import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import UserForm from './scenes/Sign/index'

class App extends Component {
  render() {
    return (
      <div className="">
      <Switch>
        <Route exact path="/user/:page"  component={UserForm}/>
      </Switch>
      </div>
    );
  }
}

export default App;
