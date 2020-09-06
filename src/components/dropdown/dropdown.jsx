import Popover from '@/components/popover/popover';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function DropdownMenuitem({ children, className }) {
  return (
    <button className={classNames('dropdown__menuitem', className)}>{children}</button>
  );
}

DropdownMenuitem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function Dropdown({ children, className, toggle }) {
  return (
    <Popover className={classNames('dropdown', className)} toggle={toggle}>
      {children}
    </Popover>
  );
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.node,
};

DropdownMenuitem.displayName = 'Dropdown.Menuitem';

Dropdown.Menuitem = DropdownMenuitem;

export default Dropdown;
