/* eslint-env jest */

import { GET_ARTICLES_SUCCESS, SHOW_ARTICLE, HIDE_ARTICLE } from '../constants/articles';

import articles from './articles';

describe('Given a articles reducer', () => {
  describe('when a state is passed', () => {
    let initState;

    beforeEach(() => {
      initState = {
        list: { 0: 'a' },
        selected: 2,
      };
    });

    describe('and the GET_ARTICLES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: GET_ARTICLES_SUCCESS,
          articles: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a', 1: 'b' },
          selected: 2,
        });
      });
    });

    describe('and the SHOW_ARTICLE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: SHOW_ARTICLE,
          articleId: 1,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a' },
          selected: 1,
        });
      });
    });

    describe('and the HIDE_ARTICLE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: HIDE_ARTICLE,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 0: 'a' },
          selected: null,
        });
      });
    });
  });

  describe('when the state is NOT passed', () => {
    let initState;
    describe('and the GET_ARTICLES_SUCCESS action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: GET_ARTICLES_SUCCESS,
          articles: { 1: 'b' },
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: { 1: 'b' },
          selected: null,
        });
      });
    });

    describe('and the SHOW_ARTICLE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: SHOW_ARTICLE,
          articleId: 1,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: {},
          selected: 1,
        });
      });
    });

    describe('and the HIDE_ARTICLE action is fired', () => {
      let newState;

      beforeEach(() => {
        newState = articles(initState, {
          type: HIDE_ARTICLE,
        });
      });

      it('should return the expected new state', () => {
        expect(newState).toEqual({
          list: {},
          selected: null,
        });
      });
    });
  });
});
