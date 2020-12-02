import { Editor as TuiEditor } from '@toast-ui/react-editor';
import PropTypes from 'prop-types';
import React from 'react';

const Editor = ({ innerRef, ...rest }) => (
  <TuiEditor {...rest} ref={innerRef} />
);

Editor.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  innerRef: PropTypes.shape({ innerRef: PropTypes.any }),
};

Editor.displayName = 'Editor';

export default Editor;
