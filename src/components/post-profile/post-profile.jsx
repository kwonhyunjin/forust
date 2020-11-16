import { LOCALE_DATE_TIME_FORMAT } from '@/utils/date';
import { TIMESTAMP_PROP_TYPES } from '@/utils/react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function PostProfile({
  author, created, className, ...rest
}) {
  const fromDay = dayjs().diff(dayjs.unix(created.seconds), 'day');
  const fromAskedDay = `${dayjs().from(dayjs.unix(created.seconds))} ago`;
  const askedDate = dayjs.unix(created.seconds).format(LOCALE_DATE_TIME_FORMAT);

  return (
    <Link href="#">
      <a
        {...rest}
        className={classNames('post-profile', className)}
        aria-label={author}
        title={askedDate}
      >
        <div className="post-profile__avatar" aria-hidden="true">
          <img src="/images/avatar-sample.jpeg" className="post-profile__avatar-img" alt="" />
        </div>
        <div className="post-profile__info" aria-hidden="true">
          <div className="post-profile__name">{author}</div>
          <div className="post-profile__date">{fromDay > '7' ? askedDate : fromAskedDay}</div>
        </div>
      </a>
    </Link>
  );
}

PostProfile.propTypes = {
  author: PropTypes.string,
  created: TIMESTAMP_PROP_TYPES,
  className: PropTypes.string,
};
