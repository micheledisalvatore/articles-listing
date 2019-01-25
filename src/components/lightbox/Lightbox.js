import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';

import { hideArticle } from '../../actions/articles';

import Article from '../article';

import { Wrapper, Background } from './Lightbox.styled';

export class Lightbox extends Component {
  constructor(props) {
    super(props);
    this.handleEscKey = this.handleEscKey.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleEscKey, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleEscKey, false);
  }

  handleEscKey(event) {
    const { hideArticleAction } = this.props;

    if (event.keyCode === 27) {
      hideArticleAction();
    }
  }

  render() {
    const { hideArticleAction, article: { artwork, content, title } } = this.props;

    return (
      <Wrapper>
        <Background onClick={hideArticleAction} />
        <Article artwork={artwork} content={content} title={title} full />
      </Wrapper>
    );
  }
}

Lightbox.propTypes = {
  hideArticleAction: PropTypes.func.isRequired,
  article: PropTypes.shape({
    artwork: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export const mapStateToProps = ({ articles: { list, selected } }) => ({
  article: list[selected],
});

export const mapDispatchToProps = dispatch => ({
  hideArticleAction: bindActionCreators(hideArticle, dispatch),
});
