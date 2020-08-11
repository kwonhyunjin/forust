import Popover from '@/components/popover/popover';
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

function Dropdown({ children, toggle }) {
  return (
    <Popover toggle={toggle}>
      {children}
    </Popover>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  toggle: PropTypes.node,
};

// Object.assign(Dropdown, { Menuitem: DropdownMenuitem });
Dropdown.Menuitem = DropdownMenuitem;

export default Dropdown;
