import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Button({
  children, className, type = 'button', ...rest
}) {
  return (
    <button {...rest} className={classNames('button', className)} type={type}>{children}</button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};
