import { connect } from 'react-redux';

import { Lightbox, mapStateToProps, mapDispatchToProps } from './Lightbox';

export default connect(mapStateToProps, mapDispatchToProps)(Lightbox);
