import { connect } from 'react-redux';

import { Grid, mapStateToProps, mapDispatchToProps } from './Grid';

export default connect(mapStateToProps, mapDispatchToProps)(Grid);
