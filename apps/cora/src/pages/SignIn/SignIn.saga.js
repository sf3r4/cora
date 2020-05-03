import { call, put, takeEvery } from 'redux-saga/effects';
import http from '../../helpers/http';
import {
  SIGN_IN_REQUEST,
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE
} from './SignIn.actions';

function* fetchSignIn(action) {
  try {
    const token = yield call(http.post, '/api-token-auth', action.payload);
    yield put({ type: SIGN_IN_SUCCESS, token });
  } catch (e) {
    yield put({ type: SIGN_IN_FAILURE, message: e.message });
  }
}

function* watchSignIn() {
  yield takeEvery(SIGN_IN_REQUEST, fetchSignIn);
}

export default function* () {
  yield call(watchSignIn);
}
