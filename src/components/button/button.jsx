import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Button = React.forwardRef(({
  children, className, color = 'primary', href = '#', type = 'button', ...rest
}, ref) => {
  const isAnchor = type === 'anchor';
  const Element = isAnchor ? 'a' : 'button';

  return (
    <Element
      {...rest}
      className={classNames('button', `button--${color}`, className)}
      color={color}
      href={isAnchor ? href : undefined}
      type={isAnchor ? undefined : type}
      ref={ref}
    >
      {children}
    </Element>
  );
});

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  type: PropTypes.string,
};

Button.displayName = 'Button';

export default React.memo(Button);
