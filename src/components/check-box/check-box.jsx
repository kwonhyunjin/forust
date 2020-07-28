import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function CheckBox({ className, ...rest }) {
  return (
    <input {...rest} type="checkbox" className={classNames('checkbox', className)} />
  );
}

CheckBox.propTypes = {
  className: PropTypes.string,
};
