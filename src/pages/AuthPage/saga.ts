import { call, put, takeLatest, select } from 'redux-saga/effects';

import { selectAccessToken } from 'App/selectors';
import { initializeSpotify } from 'utils/spotifyUtils';
import {
  getMeRequest,
  getMeSuccess,
  getMeFailure,
  GetMeSuccessResponse,
  getMyTopArtistsRequest,
  getMyTopArtistsSuccess,
  getMyTopArtistsFailure,
  GetMyTopArtistsSuccessResponse,
} from './actions';

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

function* getMyTopArtistsSaga() {
  try {
    const accessToken: string = yield select(selectAccessToken);
    const Spotify = initializeSpotify(accessToken);

    const response: GetMyTopArtistsSuccessResponse = yield call(Spotify.getMyTopArtists);

    yield put(getMyTopArtistsSuccess(response));
  } catch (err) {
    yield put(getMyTopArtistsFailure());
  }
}

export default function* authPageSaga() {
  yield takeLatest(getMeRequest, getMeSaga);
  yield takeLatest(getMyTopArtistsRequest, getMyTopArtistsSaga);
}
