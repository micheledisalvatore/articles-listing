import React from 'react';
import { bindActionCreators } from 'redux';

import { showArticle } from '../../actions/articles';

import { Content, Img, TextWrapper } from './Article.styled';

export const Article = ({ artwork, content, full, id, title, showArticleAction }) => {
  const handleArticleClick = () => { showArticleAction(id) };

  return (
    <div>
      <Img src={artwork} alt={title} />
      <TextWrapper>
        <h3>{title}</h3>
        <Content dangerouslySetInnerHTML={{__html: content}} onClick={handleArticleClick} full={full} />
      </TextWrapper>
    </div>
  )
}

export const mapDispatchToProps = (dispatch) => ({
  showArticleAction: bindActionCreators(showArticle, dispatch),
})