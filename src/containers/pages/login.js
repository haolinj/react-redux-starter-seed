import React, { Component } from 'react';
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Button
} from 'react-bootstrap';
import { connect } from 'react-redux';
import { sessionActions } from '../../state/modules/session';
import { bindActionCreators } from 'redux';
import { push } from 'react-router-redux';

class Login extends Component {

  constructor() {
    super();

    this.state = {
      loginForm: {
        email: '',
        password: ''
      }
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.session.isAuthenticated) {
      nextProps.goto('/app/home');
    }
  }

  onLoginFormChanged(key, event) {
    let nextLoginForm = Object.assign({}, this.state.loginForm);
    nextLoginForm[key] = event.target.value;
    let nextState = Object.assign({}, this.state, {loginForm: nextLoginForm});
    this.setState(nextState);
  }

  login(e) {
    e.preventDefault();
    this.props.login({email: this.state.loginForm.email, password: this.state.loginForm.password});
  }

  render() {
    return (
      <div style={{width: '400px', margin: 'auto', marginTop: '20px'}}>
        <form onSubmit={(e) => this.login(e)}>
          <FieldGroup
            id='formControlsEmail'
            type='email'
            label='Email address'
            placeholder='Enter email'
            value={this.state.loginForm.email}
            onChange={(e) => this.onLoginFormChanged('email', e)}
            required
          />
          <FieldGroup
            id='formControlsPassword'
            label='Password'
            type='password'
            placeholder='Enter password'
            value={this.state.loginForm.password}
            onChange={(e) => this.onLoginFormChanged('password', e)}
            required
          />
          <Button type='submit'>
            Login
          </Button>
        </form>
      </div>
    );
  }
}

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

// Keep in mind we can use Selectors for this state selection.
// E.g. https://github.com/reactjs/reselect
const mapStateToProps = (state) => ({
  session: state.session,
});

const mapDispatchToProps = (dispatch) => ({
  login: bindActionCreators(sessionActions.session.login, dispatch),
  goto: bindActionCreators(push, dispatch)
});

// Not using decorator syntax yet, e.g. @connect(...), if we want to use it, just install Babel
// as decorator syntax isn't built into any Javascript runtimes yet and subject to change.
export default connect(mapStateToProps, mapDispatchToProps)(Login);
