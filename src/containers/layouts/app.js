import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Home, About } from '../pages';
import { Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { sessionActions } from '../../state/modules/session';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';

class App extends Component {

  logout() {
    this.props.logout();
  }

  componentWillReceiveProps(nextProps) {
    if (!nextProps.session.isAuthenticated) {
      nextProps.goto('/landing/login');
    }
  }

  render() {
    let parentUrl = this.props.match.url;

    return (
      <div>
        <Nav bsStyle='tabs'>
          <LinkContainer to={`${parentUrl}/home`}>
            <NavItem>Home</NavItem>
          </LinkContainer>
          <LinkContainer to={`${parentUrl}/about`}>
            <NavItem>About</NavItem>
          </LinkContainer>
          <NavItem className='pull-right' onClick={() => this.logout()}>
            Logout
          </NavItem>
        </Nav>
        <div>
          <Route path={`${parentUrl}/home`} component={Home} />
          <Route path={`${parentUrl}/about`} component={About} />
        </div>
      </div>
    )
  };
}

const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  logout: bindActionCreators(sessionActions.session.logout, dispatch),
  goto: bindActionCreators(push, dispatch)
});

// Not using decorator syntax yet, e.g. @connect(...), if we want to use it, just install Babel
// as decorator syntax isn't built into any Javascript runtimes yet and subject to change.
export default connect(mapStateToProps, mapDispatchToProps)(App);
