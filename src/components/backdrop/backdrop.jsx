import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Backdrop({
  className, onClick, ...rest
}) {
  const handleClick = (e) => {
    onClick?.(e);
  };

  return (
    <div
      {...rest}
      className={classNames('backdrop', className)}
      onClick={handleClick}
      aria-hidden="true"
    />
  );
}

Backdrop.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
