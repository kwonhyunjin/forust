import Button from '@/components/button/button';
import TextArea from '@/components/text-area/text-area';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function PostComments({ children, className, ...rest }) {
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  return (
    <section {...rest} className={classNames('post-comments', className)}>
      <div className="post-comments__separator" />
      <h2 className="post-comments__title">3 Comments</h2>
      <div className="post-comments__list" role="list">{children}</div>
      <form className="post-comments__form">
        <TextArea className="post-comments__field" onChange={handleChange} placeholder="Write your comment here." aria-label="Add comment" />
        <span className="post-comments__filed-limit">0/500</span>
        <Button type="submit" className="post-comments__submit" disabled={content.length < 1}>Comment</Button>
      </form>
    </section>
  );
}

PostComments.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
