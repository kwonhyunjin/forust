import Icon from '@/components/icon/icon';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function Comments({
  children, className, date, user, ...rest
}) {
  return (
    <div {...rest} className={classNames('comments', className)}>
      <span className="comments__text">
        {children}
      </span>
      &nbsp;-&nbsp;
      <Link href="#">
        <a className="comments__user">
          {user}
        </a>
      </Link>
      <div className="comments__date">{date}</div>
      <button type="button" className="comments__benefits">
        <Icon type="pencil" className="comments__benefits-icon" aria-hidden="true" />
      </button>
      <button type="button" className="comments__benefits">
        <Icon type="trash" className="comments__benefits-icon" aria-hidden="true" />
      </button>
    </div>
  );
}

Comments.propTypes = {
  children: PropTypes.string,
  className: PropTypes.string,
  date: PropTypes.node,
  user: PropTypes.string,
};
