import Comment from '@/components/comment/comment';
import Icon from '@/components/icon/icon';
import PostComments from '@/components/post-comments/post-comments';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React from 'react';

const Viewer = dynamic(
  () => import('@/components/viewer/viewer'),
  { ssr: false },
);

dayjs.extend(relativeTime);

export default function QuestionCard({
  className, posts, ...rest
}) {
  const fromAskedDays = `${dayjs().from(dayjs(posts.updated))} ago`;
  const askedDate = dayjs(posts.updated).format('MMM D \'YY [at] H:mm');

  return (
    <div {...rest} className={classNames('card question-card', className)}>
      <div className="question-card__header">
        <h2 className="question-card__title">{posts.title}</h2>
        <div className="question-card__count">
          <span className="question-card__count-item">
            Asked
            {' '}
            {dayjs(posts.updated).format('MMM D \'YY [at] H:mm')}
          </span>
          <span className="question-card__count-item">Active 3 days ago</span>
          <span className="question-card__count-item">Viewed 1.5m times</span>
        </div>
        <PostVote className="question-card__vote" />
      </div>
      <div className="question-card__content">
        <Viewer
          initialValue={posts.content}
        />
      </div>
      <PostTags className="question-card__tags">
        {posts.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </PostTags>
      <PostProfile
        className="question-card__profile"
        author={posts.author}
        updated={fromAskedDays.charAt(0) === '8' ? askedDate : fromAskedDays}
      />
      <div className="question-card__actions">
        <button type="button" className="question-card__action-item">
          <Icon type="pencil" className="question-card__action-icon" aria-hidden="true" />
          Edit
        </button>
        <button type="button" className="question-card__action-item">
          <Icon type="trash" className="question-card__action-icon" aria-hidden="true" />
          Delete
        </button>
        <button type="button" className="question-card__action-item">
          <Icon type="share" className="question-card__action-icon" aria-hidden="true" />
          Share
        </button>
      </div>
      <PostComments className="question-card__comment">
        <Comment className="question-card__comment-item" role="listitem" user="Chamdori" date="3 days ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
        <Comment className="question-card__comment-item" role="listitem" user="Gyumin" date="5 month ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
        <Comment className="question-card__comment-item" role="listitem" user="Hyunjin" date="8 years ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
      </PostComments>
    </div>

  );
}

QuestionCard.propTypes = {
  className: PropTypes.string,
  posts: PropTypes.shape({
    author: PropTypes.node,
    content: PropTypes.node,
    id: PropTypes.node,
    title: PropTypes.node,
    tags: PropTypes.node,
    updated: PropTypes.node,
  }),
};
