import Comment from '@/components/comment/comment';
import Icon from '@/components/icon/icon';
import PostComments from '@/components/post-comments/post-comments';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function AnswerCard({ className, ...rest }) {
  return (
    <div {...rest} className={classNames('card answer-card', className)}>
      <div className="answer-card__header">
        <div className="answer-card__content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <PostVote className="answer-card__vote" />
      </div>
      <PostTags className="answer-card__tags">
        <Tag>forust</Tag>
        <Tag>chamdori</Tag>
        <Tag>gyumin</Tag>
        <Tag>hyunjin</Tag>
      </PostTags>
      <PostProfile className="answer-card__profile" />
      <div className="answer-card__actions">
        <button type="button" className="answer-card__action-item">
          <Icon type="pencil" className="answer-card__action-icon" aria-hidden="true" />
          Edit
        </button>
        <button type="button" className="answer-card__action-item">
          <Icon type="trash" className="answer-card__action-icon" aria-hidden="true" />
          Delete
        </button>
        <button type="button" className="answer-card__action-item">
          <Icon type="share" className="answer-card__action-icon" aria-hidden="true" />
          Share
        </button>
      </div>
      <PostComments className="answer-card__comment">
        <Comment className="answer-card__comment-item" role="listitem" user="Chamdori" date="3 days ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
        <Comment className="answer-card__comment-item" role="listitem" user="Gyumin" date="5 month ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
        <Comment className="answer-card__comment-item" role="listitem" user="Hyunjin" date="8 years ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
      </PostComments>
    </div>
  );
}

AnswerCard.propTypes = {
  className: PropTypes.string,
};
