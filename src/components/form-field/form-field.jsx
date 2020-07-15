import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function FormField({
  children, className, error, label, ...rest
}) {
  return (
    <div {...rest} className={classNames('form-field', className)}>
      <label className="form-field__wrapper">
        <span className="form-field__label">{label}</span>
        <span className="form-field__slot">{children}</span>
      </label>
      {error && <p className="form-field__message">{error}</p>}
    </div>
  );
}

FormField.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  error: PropTypes.node,
  label: PropTypes.node,
};
