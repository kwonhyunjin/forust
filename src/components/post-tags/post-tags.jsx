import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostTag({ className, children }) {
  return (
    <div className={classNames('post-tag', className)}>{children}</div>
  );
}

PostTag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
