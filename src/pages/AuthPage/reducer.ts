import { createReducer } from '@reduxjs/toolkit';

import { getMeSuccess, GetMeSuccessResponse } from './actions';

export type AuthInitialState = {
  profile: GetMeSuccessResponse | null;
};

export const authInitialState: AuthInitialState = {
  profile: null,
};

export const authReducer = createReducer(authInitialState, (builder) =>
  builder.addCase(getMeSuccess, (state, action) => {
    state.profile = action.payload;
  }),
);
