import React, { Fragment } from 'react';

import Grid from '../grid';
import Lightbox from '../lightbox';

export const Main = ({ selectedArticle }) => (
  <Fragment>
    <Grid />
    { selectedArticle !== null && ( <Lightbox /> )}
  </Fragment>
);

export const mapStateToProps = ({ articles: { selected }}) => ({
  selectedArticle: selected,
});
