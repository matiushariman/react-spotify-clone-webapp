import { combineReducers, Action } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';

import { appReducer } from 'App/reducer';
import { authReducer } from 'pages/AuthPage/reducer';
import { examplePageReducer } from 'pages/ExamplePage/reducer';
import { toastReducer } from 'services/Toast/reducer';
import { loadingReducer } from 'store/api/loading/reducer';
import { successReducer } from 'store/api/success/reducer';

import { routerReducer } from './createReduxHistory';

const persistConfig = {
  key: 'spotify-clone',
  storage: sessionStorage,
};

const createCombinedReducer = () =>
  combineReducers({
    router: routerReducer,
    api: combineReducers({
      loading: loadingReducer,
      success: successReducer,
    }),
    app: persistReducer(persistConfig, appReducer),
    authPage: authReducer,
    examplePage: examplePageReducer,
    toast: toastReducer,
  });

export type RootState = ReturnType<ReturnType<typeof createCombinedReducer>>;

export const createReducer = () => {
  const appRootReducer = createCombinedReducer();

  const rootReducer = (state: RootState | undefined, action: Action) => {
    if (action.type === 'LOGOUT') {
      state = undefined;
    }

    return appRootReducer(state, action);
  };

  return rootReducer;
};
