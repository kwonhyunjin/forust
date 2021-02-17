import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const SelectOption = React.forwardRef(({
  children, ...rest
}, ref) => (
  <option
    {...rest}
    ref={ref}
  >
    {children}
  </option>
));

SelectOption.propTypes = {
  children: PropTypes.node,
};

const Select = React.forwardRef(({
  children, className, size, ...rest
}, ref) => (
  <select
    {...rest}
    className={classNames('select text-box', `text-box--${size}`, className)}
    ref={ref}
  >
    {children}
  </select>
));

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  size: PropTypes.string,
};

SelectOption.displayName = 'Select.Option';
Select.displayName = 'Select';

Select.Option = SelectOption;

export default Select;
