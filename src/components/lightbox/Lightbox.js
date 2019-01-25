import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { hideArticle } from '../../actions/articles';

import Article from '../article';

import { Wrapper, Background } from './Lightbox.styled';

export class Lightbox extends Component {
  constructor(props){
    super(props);
    this.handleEscKey = this.handleEscKey.bind(this);
  }

  handleEscKey(event){
    const { hideArticleAction } = this.props;

    if(event.keyCode === 27) {
      hideArticleAction();
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.handleEscKey, false);
  }

  componentWillUnmount(){
    document.removeEventListener("keydown", this.handleEscKey, false);
  }

  render() {
    const { hideArticleAction, article: {artwork, content, title }} = this.props;

    return (
      <Wrapper>
        <Background onClick={hideArticleAction} />
        <Article artwork={artwork} content={content} title={title} full />
      </Wrapper>
    )
  }
}

export const mapStateToProps = ({ articles: { list, selected } }) => ({
  article: list[selected],
});

export const mapDispatchToProps = (dispatch) => ({
  hideArticleAction: bindActionCreators(hideArticle, dispatch),
})
