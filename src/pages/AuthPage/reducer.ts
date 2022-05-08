import { createReducer } from '@reduxjs/toolkit';

import {
  getMeSuccess,
  GetMeSuccessResponse,
  getMyTopArtistsSuccess,
  GetMyTopArtistsSuccessResponse,
} from './actions';

export type AuthInitialState = {
  profile: GetMeSuccessResponse | null;
  myTopArtists: GetMyTopArtistsSuccessResponse | null;
};

export const authInitialState: AuthInitialState = {
  profile: null,
  myTopArtists: null,
};

export const authReducer = createReducer(authInitialState, (builder) =>
  builder
    .addCase(getMeSuccess, (state, action) => {
      state.profile = action.payload;
    })
    .addCase(getMyTopArtistsSuccess, (state, action) => {
      state.myTopArtists = action.payload;
    }),
);
