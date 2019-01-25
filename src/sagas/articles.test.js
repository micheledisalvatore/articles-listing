/* eslint-env jest */

import {
  call,
  put,
  takeLatest,
} from 'redux-saga/effects';

import { getArticlesSuccess } from '../actions/articles';
import { GET_ARTICLES } from '../constants/articles';

import { getRemoteArticles, fetchArticles, watchActions } from './articles';

describe('Given a articles saga', () => {
  describe('when the GET_ARTICLES action is fired', () => {
    const watchActionsGen = watchActions();

    it('should call getRemoteArticles', () => {
      expect(watchActionsGen.next().value).toEqual(takeLatest(GET_ARTICLES, getRemoteArticles));
    });

    describe('and the getRemoteArticles is invoked', () => {
      const getRemoteArticlesGen = getRemoteArticles();

      it('should call fetchArticles', () => {
        expect(getRemoteArticlesGen.next().value).toEqual(call(fetchArticles));
      });
    });
  });
});
