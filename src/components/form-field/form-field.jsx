import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function FormField({
  children, className, error, label, ...rest
}) {
  return (
    <div {...rest} className={classNames('form-field', className)}>
      <label className="form-field__label">
        {label}
      </label>
      <div className="form-field__slot">{children}</div>
      <p className="form-field__message">{error}</p>
    </div>
  );
}

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.node,
  label: PropTypes.node,
};
