import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Login } from '../pages';

class Landing extends Component {

  render() {
    let parentUrl = this.props.match.url;

    return (
      <div>
        <Route path={`${parentUrl}/login`} component={Login} />
      </div>
    )
  };
}

export default Landing;
