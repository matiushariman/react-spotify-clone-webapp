import { call, put, takeLatest, select } from 'redux-saga/effects';

import { selectAccessToken } from 'App/selectors';
import { initializeSpotify } from 'utils/spotifyUtils';
import { getMeRequest, getMeSuccess, getMeFailure, GetMeSuccessResponse } from './actions';

function* getMeSaga() {
  try {
    const accessToken: string = yield select(selectAccessToken);
    const Spotify = initializeSpotify(accessToken);

    const response: GetMeSuccessResponse = yield call(Spotify.getMe);

    yield put(getMeSuccess(response));
  } catch (err) {
    yield put(getMeFailure());
  }
}

export default function* authPageSaga() {
  yield takeLatest(getMeRequest, getMeSaga);
}
