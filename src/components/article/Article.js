import React from 'react';

import { Content, Img, TextWrapper } from './Article.styled';

export const Article = ({ artwork, content, title }) => (
  <div>
    <Img src={artwork} alt={title} />
    <TextWrapper>
      <h3>{title}</h3>
      <Content dangerouslySetInnerHTML={{__html: content}} />
    </TextWrapper>
  </div>
)