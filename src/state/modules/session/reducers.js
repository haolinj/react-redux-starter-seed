import sessionActions from './actions';
import {
  handleActions
} from 'redux-actions';

const reducer = handleActions({
  [sessionActions.session.loginSuccess]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: true
    });
  },
  [sessionActions.session.logout]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false
    });
  },
  [sessionActions.session.loginFailed]: (state, action) => {
    return Object.assign({}, state, {
      isAuthenticated: false,
      message: 'Login failed.'
    });
  }
}, {
  isAuthenticated: false
});

export default reducer;
