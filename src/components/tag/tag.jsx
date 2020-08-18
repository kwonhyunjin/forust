import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Tag({ children, className, ...rest }) {
  return (
    <a {...rest} className={classNames('tag', className)}>{children}</a>
  );
}

Tag.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
