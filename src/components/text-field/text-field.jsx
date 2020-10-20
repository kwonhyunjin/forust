import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const TextField = React.forwardRef(({ className, ...rest }, ref) => (
  <input {...rest} className={classNames('text-field text-box', className)} ref={ref} />
));

TextField.propTypes = {
  className: PropTypes.string,
};

TextField.displayName = 'TextField';

export default TextField;
