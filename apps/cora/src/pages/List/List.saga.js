import { call, put, takeEvery } from 'redux-saga/effects';
import http from '../helpers/http';
import {
  CHARGERS_REQUEST,
  CHARGERS_SUCCESS,
  CHARGERS_FAILURE
} from './Chargers.actions';

function* fetchChargers(action) {
  try {
    const token = yield call(http.get, '/charger', action.payload);
    yield put({ type: CHARGERS_SUCCESS, token });
  } catch (e) {
    yield put({ type: CHARGERS_FAILURE, message: e.message });
  }
}

function* watchChargers() {
  yield takeEvery(CHARGERS_REQUEST, fetchChargers);
}

export default function* () {
  yield call(watchChargers);
}
