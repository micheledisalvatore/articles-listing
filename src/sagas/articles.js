import {
  call,
  fork,
  put,
  takeLatest,
} from 'redux-saga/effects';
import { normalize } from 'normalizr';

import { GET_ARTICLES } from '../constants/articles';
import { getArticlesSuccess } from '../actions/articles';
import articlesSchema from '../schemas/articles';

export const fetchArticles = () => window.fetch('http://www.mocky.io/v2/5c4a0ace340000da09269450').then(response => response.json());

export function* getRemoteArticles() {
  try {
    const response = yield call(fetchArticles);

    const {
      entities: {
        articles,
      },
    } = normalize(response, [articlesSchema]);

    yield put(getArticlesSuccess(articles));
  } catch (e) {
    console.error('Error retrieving articles', e)
  }
}

export function* watchActions() {
  yield takeLatest(GET_ARTICLES, getRemoteArticles);
}

export default fork(watchActions);
