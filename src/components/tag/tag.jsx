import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function Tag({ className, tag, ...rest }) {
  return (
    <>
      <Link href="forum-list"><a className={classNames('tag', className)} {...rest}>{tag}</a></Link>
    </>
  );
}

Tag.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.string,
};
