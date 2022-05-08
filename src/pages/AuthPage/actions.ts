import { createAction } from '@reduxjs/toolkit';
import SpotifyWebApi from 'spotify-web-api-js';

import type { SagaReturnType } from 'redux-saga/effects';

const Spotify = new SpotifyWebApi();

export type GetMeSuccessResponse = SagaReturnType<typeof Spotify.getMe>;

export const getMeRequest = createAction('getMeRequest');
export const getMeSuccess = createAction<GetMeSuccessResponse>('getMeSuccess');
export const getMeFailure = createAction('getMeFailure');

export type GetMyTopArtistsSuccessResponse = SagaReturnType<typeof Spotify.getMyTopArtists>;

export const getMyTopArtistsRequest = createAction('getMyTopArtistsRequest');
export const getMyTopArtistsSuccess =
  createAction<GetMyTopArtistsSuccessResponse>('getMyTopArtistsSuccess');
export const getMyTopArtistsFailure = createAction('getMyTopArtistsFailure');
