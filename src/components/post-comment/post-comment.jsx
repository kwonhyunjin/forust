import Button from '@/components/button/button';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function PostComment({ children, className, ...rest }) {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <form {...rest} className={classNames('post-comment', className)}>
      <div className="post-comment__border" />
      <div className="post-comment__wrapper">
        <div className="post-comment__title">3 Comments</div>
        {children}
        <div className="post-comment__write">
          <textarea className="post-comment__write-text" onChange={handleChange} placeholder="Write your comment here." aria-label="Add Comment" />
        </div>
        <span className="post-comment__write-number">0/500</span>
        <Button type="submit" className="post-comment__write-button" disabled={content.length < 1}>Comment</Button>
      </div>
    </form>
  );
}

PostComment.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
