import { createSelector } from '@reduxjs/toolkit';

import type { RootState } from 'reducers';

const appSelector = (state: RootState) => state.app;

export const selectAccessToken = createSelector(appSelector, (app) => app.accessToken);

export const selectIsUserAuthenticated = createSelector(
  appSelector,
  (app) => typeof app.accessToken === 'string' && app.accessToken.length > 0,
);
