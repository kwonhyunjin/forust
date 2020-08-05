import Icon from '@/components/icon/icon';
import PostProfile from '@/components/post-profile/post-profile';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

export default function QuestionSummaryCard({ className, ...rest }) {
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
    <div className={classNames('question-summary-card card', className)} {...rest}>
      <div className="post-vote">
        <button className="post-vote__button post-vote__button--up" type="button" aria-label="Up" onClick={handleUpClick} />
        <p className={classNames('post-vote__result', count === 0 ? 'post-vote__result' : color ? 'post-vote__result--unlike' : 'post-vote__result--like')}>
          <span className="blind-inline">Votes: </span>
          {count}
        </p>
        <button className="post-vote__button post-vote__button--down" type="button" aria-label="Down" onClick={handleDownClick} />
      </div>
      <div className="post-main">
        <Link href="/">
          <a className="post-main__title">
            Lorem ipsum dolor sit amet.
          </a>
        </Link>
        <span className="post-main__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <div className="post-main__tags">
          <Tag className="post-main__tags--item" tag="next.js" />
          <Tag className="post-main__tags--item" tag="javascript" />
          <Tag className="post-main__tags--item" tag="react" />
        </div>
        <PostProfile />
        <ul className="question-counter">
          <li className="question-counter__item">
            <Icon type="eye" className="question-counter__icon" aria-hidden="true" />
            9,813
          </li>
          <li className="question-counter__item">
            <Icon type="comment" className="question-counter__icon" aria-hidden="true" />
            319
          </li>
        </ul>
      </div>
    </div>
  );
}

QuestionSummaryCard.propTypes = {
  className: PropTypes.string,
};
