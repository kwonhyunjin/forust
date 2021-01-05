import Button from '@/components/button/button';
import TextArea from '@/components/text-area/text-area';
import firebase from '@/firebase/index';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

export default function PostComments({ children, className, ...rest }) {
  const [content, setContent] = useState('');
  const { currentUser } = firebase.auth();

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleClick = useCallback(() => {
    if (currentUser == null) {
    // eslint-disable-next-line no-alert
      alert('개발중');
    }
  }, [currentUser]);

  return (
    <div {...rest} className={classNames('post-comments', className)}>
      <div className="post-comments__separator" />
      {/* @todo 댓글 개수에 따라 단수, 복수 표현 */}
      <h6 className="post-comments__title">2 Comments</h6>
      <div className="post-comments__list" role="list">{children}</div>
      <form className="post-comments__form">
        <TextArea className="post-comments__field" onChange={handleChange} placeholder="Write your comment here." aria-label="Add comment" />
        <span className="post-comments__filed-limit">0/500</span>
        {/* @todo 댓글 폼  */}
        <Button type="submit" className="post-comments__submit" onClick={handleClick} disabled={content.length < 1}>Comment</Button>
      </form>
    </div>
  );
}

PostComments.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
