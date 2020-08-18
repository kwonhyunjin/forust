import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// @todo popover 컴포넌트 개발
export default function Popover({ children, className, toggle }) {
  return (
    <>
      {toggle}
      <div className={classNames('popover', className)} style={{ display: 'none' }}>
        {children}
      </div>
    </>
  );
}

Popover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.node,
};
