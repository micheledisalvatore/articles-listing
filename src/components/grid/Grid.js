import React from 'react';

import Article from '../article';

import { Wrapper } from './Grid.styled';

export const Grid = ({ articles }) => (
  <Wrapper>
    { articles.map(({ artwork, content, id, title}) => (
      <Article key={id} artwork={artwork} content={content} title={title} />
    ))}
  </Wrapper>
)