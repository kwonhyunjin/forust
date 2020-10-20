import Icon from '@/components/icon/icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const getIconType = (type) => {
  if (type === 'success') {
    return 'check-circle-outline';
  }
  if (type === 'error') {
    return 'alert-octagon-outline';
  }
  if (type === 'warning') {
    return 'alert-triangle-outline';
  }
  return 'info-circle-outline';
};

export default function Alert({
  children, className, type = 'info', ...rest
}) {
  const iconType = useMemo(() => getIconType(type), [type]);
  return (
    <div {...rest} className={classNames('alert', `alert-${type}`, className)}>
      <Icon
        type={iconType}
        className={classNames('alert__icon', `alert__icon--${type}`)}
        aria-hidden="true"
      />
      <div className="alert__message">{children}</div>
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};
