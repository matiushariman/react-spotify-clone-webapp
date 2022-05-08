import { createAction } from '@reduxjs/toolkit';

export const setAccessToken = createAction<string>('setAccessToken');
