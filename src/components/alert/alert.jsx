import Icon from '@/components/icon/icon';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function Alert({
  children, className, type = 'info', ...rest
}) {
  return (
    <div {...rest} className={classNames('alert', `alert-${type}`, className)}>
      {type === 'info' && (
        <>
          <Icon type="info-circle-outline" className="alert__icon alert__icon--info" aria-hidden="true" />
          <div className="alert__message">{children}</div>
        </>
      )}
      {type === 'success' && (
        <>
          <Icon type="check-circle-outline" className="alert__icon alert__icon--success" aria-hidden="true" />
          <div className="alert__message">{children}</div>
        </>
      )}
      {type === 'error' && (
        <>
          <Icon type="alert-octagon-outline" className="alert__icon alert__icon--error" aria-hidden="true" />
          <div className="alert__message">{children}</div>
        </>
      )}
      {type === 'warning' && (
        <>
          <Icon type="alert-triangle-outline" className="alert__icon alert__icon--warning" aria-hidden="true" />
          <div className="alert__message">{children}</div>
        </>
      )}
    </div>
  );
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
};
