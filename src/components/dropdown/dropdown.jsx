import Popover from '@/components/popover/popover';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function DropdownMenuitem({ children }) {
  return (
    <button>{children}</button>
  );
}

DropdownMenuitem.propTypes = {
  children: PropTypes.node,
};

function Dropdown({ children, className, toggle }) {
  return (
    <Popover className={classNames(className)} toggle={toggle}>
      {children}
    </Popover>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.node,
};

Dropdown.Menuitem = DropdownMenuitem;

export default Dropdown;
