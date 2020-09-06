import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Label({
  children, className, input, ...rest
}) {
  return (
    <label {...rest} className={classNames('label', className)}>
      {input}
      <span className="label__body">{children}</span>
    </label>
  );
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  input: PropTypes.node,
};
