import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostProfile({ className, ...rest }) {
  return (
    <Link href="#">
      <a {...rest} className={classNames('post-profile', className)} aria-label="Chamdori written 4 days ago">
        <div className="post-profile__avatar" aria-hidden="true">
          <img src="/images/avatar-sample.jpeg" className="post-profile__avatar-img" alt="" />
        </div>
        <div className="post-profile__info" aria-hidden="true">
          <div className="post-profile__name">Chamdori</div>
          <div className="post-profile__date">4 days ago</div>
        </div>
      </a>
    </Link>
  );
}

PostProfile.propTypes = {
  className: PropTypes.string,
};
