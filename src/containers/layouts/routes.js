import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { App, Landing } from './';

class Routes extends Component {

  render() {
    return (
      <div>
        <Switch>
          <Route path='/app' component={App} />
          <Route path='/landing' component={Landing} />
          <Redirect to='/app/home' />
        </Switch>
      </div>
    )
  };
}

export default Routes;
