import { createReducer } from '@reduxjs/toolkit';

import { setAccessToken } from './actions';

export type AppInitialState = {
  accessToken: string | null;
};

export const appInitialState: AppInitialState = {
  accessToken: null,
};

export const appReducer = createReducer(appInitialState, (builder) =>
  builder.addCase(setAccessToken, (state, action) => {
    const splitParams = action.payload.split('&');

    state.accessToken = splitParams[0].split('=')[1];
  }),
);
