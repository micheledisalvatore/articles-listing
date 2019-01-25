import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { values } from 'ramda';

import { getArticles } from '../../actions/articles';

import Article from '../article';

import { Wrapper } from './Grid.styled';

export class Grid extends Component {
  constructor(props) {
    super(props);

    const { getArticlesAction } = props;

    getArticlesAction();
  }

  render() {
    const { articles } = this.props;

    return (
      <Wrapper>
        { values(articles).map((article) => (
          <Article key={article.id} {...article} />
        ))}
      </Wrapper>
    )
  }
}

export const mapStateToProps = ({ articles: { list } }) => ({
  articles: list,
})

export const mapDispatchToProps = (dispatch) => ({
  getArticlesAction: bindActionCreators(getArticles, dispatch),
});
