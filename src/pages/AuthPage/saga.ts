import { call, put, takeLatest, select } from 'redux-saga/effects';
import SpotifyWebApi from 'spotify-web-api-js';

import { selectAccessToken } from 'App/selectors';
import { getMeRequest, getMeSuccess, getMeFailure, GetMeSuccessResponse } from './actions';

function* getMeSaga() {
  try {
    const Spotify = new SpotifyWebApi();
    const accessToken: string = yield select(selectAccessToken);
    Spotify.setAccessToken(accessToken);

    const response: GetMeSuccessResponse = yield call(Spotify.getMe);

    yield put(getMeSuccess(response));
  } catch (err) {
    yield put(getMeFailure());
  }
}

export default function* authPageSaga() {
  yield takeLatest(getMeRequest, getMeSaga);
}
