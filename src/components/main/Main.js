import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { isNil } from 'ramda';

import Grid from '../grid';
import Lightbox from '../lightbox';

export const Main = ({ selectedArticle }) => (
  <Fragment>
    <Grid />
    { !isNil(selectedArticle) && ( <Lightbox /> )}
  </Fragment>
);

Lightbox.propTypes = {
  selectedArticle: PropTypes.number,
}

Lightbox.defaultProps = {
  selectedArticle: null,
}

export const mapStateToProps = ({ articles: { selected }}) => ({
  selectedArticle: selected,
});
