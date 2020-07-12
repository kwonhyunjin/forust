import PropTypes from 'prop-types';
import React from 'react';

export default function FormField({
  children, error, label,
}) {
  return (
    <div className="form-field">
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
  error: PropTypes.node,
  label: PropTypes.node,
};
