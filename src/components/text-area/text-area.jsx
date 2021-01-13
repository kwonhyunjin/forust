import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextArea({ className, size = 'medium', ...rest }) {
  return (
    <textarea
      {...rest}
      className={classNames('text-area text-box', `text-box--${size}`, className)}
      size={size}
    />
  );
}

TextArea.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};
