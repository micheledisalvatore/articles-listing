import { handleActions } from 'redux-actions';
import { assocPath, merge } from 'ramda';

import { GET_ARTICLES_SUCCESS, SHOW_ARTICLE, HIDE_ARTICLE } from '../constants/articles';

const defaultState = {
  list: {},
  selected: null,
};

const setArticles = (state, { articles }) => assocPath(['list'], merge(state.list, articles), state);
const setSelection = (state, { articleId }) => assocPath(['selected'], articleId, state);
const unsetSelection = state => assocPath(['selected'], null, state);

export default handleActions({
  [GET_ARTICLES_SUCCESS]: setArticles,
  [SHOW_ARTICLE]: setSelection,
  [HIDE_ARTICLE]: unsetSelection,
}, defaultState);
