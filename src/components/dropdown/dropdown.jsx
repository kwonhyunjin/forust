import Popover from '@/components/popover/popover';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {
  useState, useEffect, useImperativeHandle, useRef, useContext, createContext,
} from 'react';

const DropdownContext = createContext({ setOpen: () => undefined });

const DropdownMenuitem = React.forwardRef(({
  children, className, onClick, ...rest
}, ref) => {
  const { setOpen } = useContext(DropdownContext);

  const handleClick = (e) => {
    setOpen(false);
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      {...rest}
      className={classNames('dropdown__menuitem', className)}
      ref={ref}
      onClick={handleClick}
    >
      {children}
    </button>
  );
});

DropdownMenuitem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

const Dropdown = React.forwardRef(({
  children, className, toggle, ...rest
}, ref) => {
  const [open, setOpen] = useState(false);

  const popoverRef = useRef(null);
  const toggleRef = useRef(null);

  useImperativeHandle(ref, () => popoverRef.current);
  useImperativeHandle(toggle.ref, () => toggleRef.current);

  const handleClickOutside = (e) => {
    if (toggleRef.current && toggleRef.current.contains(e.target)) return;
    if (popoverRef.current && popoverRef.current.contains(e.target)) return;
    setOpen(false);
  };

  const handleButtonClick = (e) => {
    setOpen(!open);
    if (toggle.props.onClick) {
      toggle.props.onClick(e);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });

  return (
    <DropdownContext.Provider value={{ setOpen }}>
      <toggle.type {...toggle.props} ref={toggleRef} onClick={handleButtonClick} />
      <Popover
        {...rest}
        className={classNames('dropdown', className)}
        ref={popoverRef}
        open={open}
      >
        {children}
      </Popover>
    </DropdownContext.Provider>
  );
});

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  toggle: PropTypes.node.isRequired,
};

DropdownMenuitem.displayName = 'Dropdown.Menuitem';
Dropdown.displayName = 'Dropdown';

Dropdown.Menuitem = DropdownMenuitem;

export default Dropdown;
