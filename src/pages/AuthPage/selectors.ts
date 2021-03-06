import { createSelector } from '@reduxjs/toolkit';

import { createLoadingSelector } from 'store/api/loading/selectors';

import { getMeRequest, getMyTopArtistsRequest } from './actions';

import type { RootState } from 'reducers';

const authPageSelector = (state: RootState) => state.authPage;

export const selectDisplayName = createSelector(authPageSelector, (authPage) => {
  if (authPage.profile !== null) {
    return authPage.profile.display_name;
  }

  return 'N/A';
});

export const selectExternalUrl = createSelector(authPageSelector, (authPage) => {
  if (authPage.profile !== null) {
    return authPage.profile.external_urls.spotify;
  }

  return null;
});

export const selectUserImage = createSelector(authPageSelector, (authPage) => {
  if (authPage.profile !== null) {
    if (authPage.profile.images && authPage.profile.images.length > 0) {
      return authPage.profile.images[0].url;
    }
  }

  return null;
});

export const selectNoOfFollowers = createSelector(authPageSelector, (authPage) => {
  if (authPage.profile !== null) {
    if (authPage.profile.followers) {
      return authPage.profile.followers.total;
    }
  }

  return 0;
});

export const selectMyTopArtists = createSelector(authPageSelector, (authPage) => {
  if (authPage.myTopArtists !== null) {
    if (authPage.myTopArtists.items.length > 0) {
      return authPage.myTopArtists.items;
    }
  }

  return [];
});

// loading selectors
export const selectIsGetMeLoading = (state: RootState): boolean =>
  createLoadingSelector([getMeRequest])(state) || state.authPage.profile === null;

export const selectIsLoadingMyTopArtists = (state: RootState): boolean =>
  createLoadingSelector([getMyTopArtistsRequest])(state) || state.authPage.myTopArtists === null;
