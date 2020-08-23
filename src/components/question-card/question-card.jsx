import Comments from '@/components/comments/comments';
import Icon from '@/components/icon/icon';
import PostComment from '@/components/post-comment/post-comment';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';

export default function QuestionCard({ className, ...rest }) {
  return (
    <div {...rest} className={classNames('card question-card', className)}>
      <div className="question-card__wrapper">
        <div className="question-card__header">
          <Link href="#">
            <a className="question-card__title">
              Lorem ipsum dolor sit amet.
            </a>
          </Link>
          <div className="question-card__count">
            <p className="question-card__count-item">Asked 8 years, 1 month ago</p>
            <p className="question-card__count-item">Active 3 days ago</p>
            <p className="question-card__count-item">Viewed 1.5m times</p>
          </div>
          <PostVote className="question-card__vote" />
        </div>
        <span className="question-card__content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
        <PostTags className="question-card__tags">
          <Tag>forust</Tag>
          <Tag>chamdori</Tag>
          <Tag>gyumin</Tag>
          <Tag>hyunjin</Tag>
        </PostTags>
        <PostProfile className="question-card__profile" aria-label="Author" />
        <div className="question-card__benefits">
          <button type="button" className="question-card__benefits-item">
            <Icon type="pencil" className="question-card__benefits-icon" aria-hidden="true" />
            Edit
          </button>
          <button type="button" className="question-card__benefits-item">
            <Icon type="trash" className="question-card__benefits-icon" aria-hidden="true" />
            Delete
          </button>
          <button type="button" className="question-card__benefits-item">
            <Icon type="share" className="question-card__benefits-icon" aria-hidden="true" />
            Share
          </button>
        </div>
      </div>
      <PostComment className="question-card-comments">
        <Comments className="question-card__comments-item" user="Chamdori" date="3 days ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comments>
        <Comments className="question-card__comments-item" user="Gyumin" date="5 month ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comments>
        <Comments className="question-card__comments-item" user="Hyunjin" date="8 years ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comments>
      </PostComment>
    </div>
  );
}

QuestionCard.propTypes = {
  className: PropTypes.string,
};
