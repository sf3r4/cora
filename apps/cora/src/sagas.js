import { call } from 'redux-saga/effects';
import SignInSaga from './pages/SignIn/SignIn.saga';

export default function* () {
  yield call(SignInSaga);
}
