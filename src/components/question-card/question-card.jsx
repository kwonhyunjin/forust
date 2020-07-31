import QuestionProfile from '@/components/question-profile/question-profile';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import IconComment from '../../svgs/icon-comment.svg';
import IconEye from '../../svgs/icon-eye.svg';

export default function QuestionCard({ className, ...rest }) {
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
    <ul className={classNames('question-wrapper', className)} {...rest}>
      <li className="question-card card">
        <div className="question-vote">
          <button className="question-vote__up question-vote__button" type="button" aria-label="Up" onClick={handleUpClick} />
          <p className={classNames('question-vote__result', count === 0 ? 'question-vote__result' : color ? 'question-vote__result--unlike' : 'question-vote__result--like')}>{count}</p>
          <button className="question-vote__down question-vote__button" type="button" aria-label="Down" onClick={handleDownClick} />
        </div>
        <div className="question">
          <a href="/" className="question__title">
            Lorem ipsum dolor sit amet.
          </a>
          <span className="question__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          <div className="question__tags">
            <a href="forum-list" className="question__tags-item">next.js</a>
            <a href="forum-list" className="question__tags-item">react</a>
            <a href="forum-list" className="question__tags-item">javascript</a>
          </div>
          <QuestionProfile />
          <ul className="question-benefits">
            <li className="question-benefits__item">
              <IconEye className="question-benefits__img" />
              9,813
            </li>
            <li className="question-benefits__item">
              <IconComment className="question-benefits__img" />
              319
            </li>
          </ul>
        </div>
      </li>
    </ul>
  );
}

QuestionCard.propTypes = {
  className: PropTypes.string,
};
