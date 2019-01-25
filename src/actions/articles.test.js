/* eslint-env jest */

import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  SHOW_ARTICLE,
  HIDE_ARTICLE,
} from '../constants/articles';
import {
  getArticles,
  getArticlesSuccess,
  showArticle,
  hideArticle,
} from './articles';

describe('Given the articles actions', () => {
  describe('when the getArticles action is called', () => {
    it('should return an object with GET_ARTICLES type', () => {
      expect(getArticles()).toEqual({
        type: GET_ARTICLES,
      });
    });
  });
  describe('when the getArticlesSuccess action is called', () => {
    it('should return an object with GET_ARTICLES_SUCCESS type and the passed articles', () => {
      expect(getArticlesSuccess('foo')).toEqual({
        type: GET_ARTICLES_SUCCESS,
        articles: 'foo',
      });
    });
  });
  describe('when the showArticle action is called', () => {
    it('should return an object with SHOW_ARTICLE type and the passed articleId', () => {
      expect(showArticle('foo')).toEqual({
        type: SHOW_ARTICLE,
        articleId: 'foo',
      });
    });
  });
  describe('when the hideArticle action is called', () => {
    it('should return an object with HIDE_ARTICLE type', () => {
      expect(hideArticle()).toEqual({
        type: HIDE_ARTICLE,
      });
    });
  });
});
