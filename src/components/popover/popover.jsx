import PropTypes from 'prop-types';
import React from 'react';

export default function Popover({ children, toggle }) {
  return (
    <details>
      <summary>
        {toggle}
      </summary>
      <div>
        {children}
      </div>
    </details>
  );
}

Popover.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.node,
};
