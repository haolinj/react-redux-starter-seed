import reducer from './reducers';
import actions from './actions';
import { expectSaga } from 'redux-saga-test-plan';
import { loginSaga } from './sagas';

describe('Session reducers', function() {
  it('should set the session to be authenticated when login completed', function() {
    const initialState = {
      isAuthenticated: false
    };

    const result = reducer(initialState, actions.session.loginSuccess());

    expect(result.isAuthenticated).toBe(true);
  });

  it('should set the session to be not authenticated when login out', function() {
    const initialState = {
      isAuthenticated: true
    };

    const result = reducer(initialState, actions.session.logout());

    expect(result.isAuthenticated).toBe(false);
  });
});

describe('Session sagas', function() {
  it('should login and changing the session state', function() {
    let payload = {
      credential: {
        email: 'admin@example.com',
        password: '1234'
      }
    };
    expectSaga(loginSaga, {payload: payload})
    .withReducer(reducer)
    .hasFinalState({
      isAuthenticated: true
    })
    .run();
  });
  it('should not login and set the message in session state', function() {
    let payload = {
      credential: {
        email: 'admin@example.com',
        password: 'worng-password'
      }
    };
    expectSaga(loginSaga, {payload: payload})
    .withReducer(reducer)
    .hasFinalState({
      isAuthenticated: false,
      message: 'Login failed.'
    })
    .run();
  });
});

describe('Session actions', function () {
  it('should produce expected actions', function() {
    expect(actions.session.login()).toEqual(
      {
        type: 'SESSION/LOGIN',
        meta: undefined,
        payload: {credential: undefined}
      }
    );
    expect(actions.session.logout()).toEqual(
      {
        type: 'SESSION/LOGOUT'
      }
    );
    expect(actions.session.loginSuccess()).toEqual(
      {
        type: 'SESSION/LOGIN_SUCCESS'
      }
    );
    expect(actions.session.loginFailed()).toEqual(
      {
        type: 'SESSION/LOGIN_FAILED'
      }
    );
  });
});
