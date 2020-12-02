import { Viewer as TuiEditor } from '@toast-ui/react-editor';
import PropTypes from 'prop-types';
import React from 'react';

const Viewer = ({ innerRef, ...rest }) => (
  <TuiEditor {...rest} ref={innerRef} />
);

Viewer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  innerRef: PropTypes.shape({ innerRef: PropTypes.any }),
};

Viewer.displayName = 'Viewer';

export default Viewer;
