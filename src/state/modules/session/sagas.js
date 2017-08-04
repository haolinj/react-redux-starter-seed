import { put, takeLatest } from 'redux-saga/effects';
import sessionActions from './actions';

export function* loginSaga(action) {
  if (action.payload.credential.email === 'admin@example.com' && action.payload.credential.password === '1234') {
    yield put(sessionActions.session.loginSuccess());
  }
  else {
    yield put(sessionActions.session.loginFailed());
  }
}

function* sessionSagas() {
  yield takeLatest(sessionActions.session.login().type, loginSaga);
}

export default sessionSagas;
