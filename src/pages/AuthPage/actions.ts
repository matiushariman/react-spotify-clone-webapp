import { createAction } from '@reduxjs/toolkit';
import SpotifyWebApi from 'spotify-web-api-js';

import type { SagaReturnType } from 'redux-saga/effects';

const Spotify = new SpotifyWebApi();

export type GetMeSuccessResponse = SagaReturnType<typeof Spotify.getMe>;

export const getMeRequest = createAction('getMeRequest');
export const getMeSuccess = createAction<GetMeSuccessResponse>('getMeSuccess');
export const getMeFailure = createAction('getMeFailure');
