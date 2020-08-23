import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Checkbox({ className, ...rest }) {
  return (
    <input {...rest} type="checkbox" className={classNames('checkbox', className)} />
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
};
