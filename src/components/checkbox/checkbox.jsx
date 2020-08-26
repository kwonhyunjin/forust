import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// @todo 체크박스 개발
export default function Checkbox({ className, ...rest }) {
  return (
    <input {...rest} type="checkbox" className={classNames('checkbox', className)} />
  );
}

Checkbox.propTypes = {
  className: PropTypes.string,
};
