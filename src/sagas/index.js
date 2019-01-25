import { all } from 'redux-saga/effects';

import articles from './articles';

const sagas = [
  articles,
];

function* rootSaga() {
  yield all(sagas);
}

export default rootSaga;
