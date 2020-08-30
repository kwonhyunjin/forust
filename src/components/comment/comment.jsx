import Icon from '@/components/icon/icon';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function Comment({
  children, className, date, user, ...rest
}) {
  return (
    <div {...rest} className={classNames('comment', className)}>
      <span className="comment__body">
        {children}
      </span>
      &nbsp;-&nbsp;
      <Link href="#">
        <a className="comment__user">
          {user}
        </a>
      </Link>
      &nbsp;
      <span className="comment__date">{date}</span>
      <div className="comment__actions">
        <button type="button" className="comment__action" aria-label="Edit">
          <Icon type="pencil" className="comment__action-icon" aria-hidden="true" />
        </button>
        <button type="button" className="comment__action" aria-label="Delete">
          <Icon type="trash" className="comment__action-icon" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}

Comment.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.node,
  user: PropTypes.string,
};
