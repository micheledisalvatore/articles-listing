import React from 'react';
import PropTypes from 'prop-types';
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

Article.propTypes = {
  artwork: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  full: PropTypes.bool,
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  showArticleAction: PropTypes.func.isRequired,
}

Article.defaultProps = {
  full: false,
}

export const mapDispatchToProps = (dispatch) => ({
  showArticleAction: bindActionCreators(showArticle, dispatch),
})