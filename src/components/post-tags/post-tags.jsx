import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostTags({ className, children, ...rest }) {
  return (
    <div {...rest} className={classNames('post-tags', className)}>{children}</div>
  );
}

PostTags.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
