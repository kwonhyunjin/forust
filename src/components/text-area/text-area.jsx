import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextArea({ className, ...rest }) {
  return (
    <textarea {...rest} className={classNames('text-area', className)} />
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
};
