import { fork } from 'redux-saga/effects';

import authPageSaga from 'pages/AuthPage/saga';
import examplePageSaga from 'pages/ExamplePage/saga';

export function* rootSaga() {
  yield fork(authPageSaga);
  yield fork(examplePageSaga);
}
