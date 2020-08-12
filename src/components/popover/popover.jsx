import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Popover({ children, className, toggle }) {
  return (
    <details className={classNames('popover-wrapper', className)}>
      <summary className="popover-summary">
        {toggle}
      </summary>
      <div className="popover-overlay">
        {children}
      </div>
    </details>
  );
}

Popover.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.node,
};
