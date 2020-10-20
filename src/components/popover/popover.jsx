import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const Popover = React.forwardRef(({
  children, className, open = false, ...rest
}, ref) => (
  open && (
  <div {...rest} className={classNames('popover', className)} ref={ref}>
    {children}
  </div>
  )
));

Popover.propTypes = {
  // @todo anchor 엘리먼트 위치로 Popover 컴포넌트의 위치 이동
  // anchor: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  open: PropTypes.bool,
};

Popover.displayName = 'Popover';

export default Popover;
