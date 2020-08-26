import Icon from '@/components/icon/icon';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function QuestionSummaryCard({ className, ...rest }) {
  return (
    <article {...rest} className={classNames('card question-summary-card', className)}>
      <PostVote className="question-summary-card__vote" />
      <div className="question-summary-card__main">
        <Link href="#">
          <a className="question-summary-card__link">
            <h2 className="question-summary-card__title">Lorem ipsum dolor sit amet.</h2>
          </a>
        </Link>
        <p className="question-summary-card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <PostTags className="question-summary-card__tags">
          <Tag>next.js</Tag>
          <Tag>javascript</Tag>
          <Tag>react</Tag>
        </PostTags>
        <PostProfile className="question-summary-card__profile" aria-label="Author" />
        <ul className="question-summary-card__count">
          <li className="question-summary-card__count-item">
            <Icon type="eye" className="question-summary-card__count-icon" aria-label="View count:" />
            9,813
          </li>
          <li className="question-summary-card__count-item">
            <Icon type="comment" className="question-summary-card__count-icon" aria-label="Comment count:" />
            319
          </li>
        </ul>
      </div>
    </article>
  );
}

QuestionSummaryCard.propTypes = {
  className: PropTypes.string,
};
