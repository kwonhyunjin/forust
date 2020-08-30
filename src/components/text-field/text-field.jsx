import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function TextField({ className, ...rest }) {
  return (
    <input {...rest} className={classNames('text-field textbox', className)} />
  );
}

TextField.propTypes = {
  className: PropTypes.string,
};
