import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostProfile({ className }) {
  return (
    <div className={classNames('post-profile', className)}>
      <Link href="#">
        <a className="post-profile__link">
          <img src="/images/avatar-sample.jpeg" className="post-profile__icon" alt="" aria-hidden="true" />
        </a>
      </Link>
      <ul className="profile-list">
        <li className="profile-list__user"><Link href="#"><a className="profile-list__link">Chamdori</a></Link></li>
        <li className="profile-list__date">4 days ago</li>
      </ul>
    </div>
  );
}

PostProfile.propTypes = {
  className: PropTypes.string,
};
