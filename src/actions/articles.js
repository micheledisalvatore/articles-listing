import {
  GET_ARTICLES,
  GET_ARTICLES_SUCCESS,
  SHOW_ARTICLE,
  HIDE_ARTICLE,
} from '../constants/articles';

export const getArticles = () => ({
  type: GET_ARTICLES,
});

export const getArticlesSuccess = (articles) => ({
  type: GET_ARTICLES_SUCCESS,
  articles,
});

export const showArticle = (articleId) => ({
  type: SHOW_ARTICLE,
  articleId,
});

export const hideArticle = () => ({
  type: HIDE_ARTICLE,
});