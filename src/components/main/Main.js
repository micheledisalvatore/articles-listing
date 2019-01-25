import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Grid from '../grid';
import Lightbox from '../lightbox';

export const Main = ({ selectedArticle }) => (
  <Fragment>
    <Grid />
    { selectedArticle !== null && (<Lightbox />)}
  </Fragment>
);

Main.propTypes = {
  selectedArticle: PropTypes.number,
};

Main.defaultProps = {
  selectedArticle: null,
};

export const mapStateToProps = ({ articles: { selected } }) => ({
  selectedArticle: selected,
});
