import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function PostVote({ className }) {
  // @todo 사용자(글쓴이가 아닌)는 질문을 읽고 추천, 비추천을 할 수 있다. 득표수는 추천을 누르면 파란색, 비추천을 누르면 빨간색으로 보인다.
  const [color, setColor] = useState(false);
  const [count, setCount] = useState(0);

  const handleUpClick = () => {
    setColor(false);
    setCount(count + 1);
  };

  const handleDownClick = () => {
    setColor(true);
    setCount(count - 1);
  };

  return (
    <div className={classNames('post-vote', className)}>
      <button className="post-vote__button post-vote__button--up" type="button" aria-label="Up" onClick={handleUpClick} />
      <p className={classNames('post-vote__result', count === 0 ? 'post-vote__result' : color ? 'post-vote__result--unlike' : 'post-vote__result--like')}>
        <span className="blind-inline">Votes: </span>
        {count}
      </p>
      <button className="post-vote__button post-vote__button--down" type="button" aria-label="Down" onClick={handleDownClick} />
    </div>
  );
}

PostVote.propTypes = {
  className: PropTypes.string,
};
