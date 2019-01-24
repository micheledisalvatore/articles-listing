import React, { Component, Fragment } from 'react';

import Grid from './components/grid';

class App extends Component {
  state = {
    articles: [],
  }

  componentWillMount() {
    window.fetch('http://www.mocky.io/v2/5c4a0ace340000da09269450')
      .then(response => response.json())
      .then((articles) => { this.setState({ articles }) });
  }

  render() {
    const { articles } = this.state;

    return (
      <Fragment>
        <Grid articles={articles} />
      </Fragment>
    );
  }
}

export default App;
