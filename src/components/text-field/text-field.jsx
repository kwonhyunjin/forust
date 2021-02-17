import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TextField = React.forwardRef(({ className, size = 'medium', ...rest }, ref) => (
  <input
    {...rest}
    className={classNames('text-field text-box', `text-box--${size}`, className)}
    ref={ref}
    size={size}
  />
));

TextField.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
};

TextField.displayName = 'TextField';

export default TextField;
