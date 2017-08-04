import { createActions } from 'redux-actions';

const sessionActions = createActions({
  SESSION: {
    LOGIN: [
      credential => ({credential}),
      () => {}
    ],
    LOGOUT: undefined,
    LOGIN_SUCCESS: undefined,
    LOGIN_FAILED: undefined
  }
});

export default sessionActions;
