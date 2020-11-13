import Comment from '@/components/comment/comment';
import Icon from '@/components/icon/icon';
import PostComments from '@/components/post-comments/post-comments';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import firebase from '@/firebase/index';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useMemo } from 'react';

const Viewer = dynamic(
  () => import('@/components/viewer/viewer'),
  { ssr: false },
);

dayjs.extend(relativeTime);

export default function QuestionCard({
  className, posts, ...rest
}) {
  const router = useRouter();

  const fromDay = dayjs().diff(posts.created, 'day');
  const fromAskedDay = `${dayjs().from(dayjs(posts.created))} ago`;
  const askedDate = dayjs(posts.created).format('MMM D \'YY [at] H:mm');

  const { currentUser } = firebase.auth();
  const isAuthor = useMemo(() => posts.authorUid === currentUser.uid, [posts.authorUid, currentUser.uid]);

  const handleEdit = () => {
    router.push(`/forum/write/${posts.questionUid}`);
  };

  const handleDelete = () => {
    // eslint-disable-next-line no-alert
    const deleteConfirm = window.confirm('Are you sure you want to delete it?');
    if (isAuthor) {
      if (!deleteConfirm) { return; }
      firebase.firestore()
        .collection('question')
        .doc(posts.questionUid)
        .delete();
      router.push('/forum/list');
    } else {
      // eslint-disable-next-line no-alert
      alert('Make sure you have edit rights');
    }
  };

  return (
    <div {...rest} className={classNames('card question-card', className)}>
      <div className="question-card__header">
        <h2 className="question-card__title">{posts.title}</h2>
        <div className="question-card__count">
          <span className="question-card__count-item">
            Asked
            {' '}
            {dayjs(posts.created).format('MMM D \'YY [at] H:mm')}
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
        author={posts.displayName}
        created={fromDay > '7' ? askedDate : fromAskedDay}
      />
      <div className="question-card__actions">
        {isAuthor
          && (
            <>
              <button type="button" className="question-card__action-item" onClick={handleEdit}>
                <Icon type="pencil" className="question-card__action-icon" aria-hidden="true" />
                Edit
              </button>
              <button type="button" className="question-card__action-item" onClick={handleDelete}>
                <Icon type="trash" className="question-card__action-icon" aria-hidden="true" />
                Delete
              </button>
            </>
          )}
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
    authorUid: PropTypes.string,
    displayName: PropTypes.string,
    content: PropTypes.string,
    created: PropTypes.string,
    tags: PropTypes.node,
    title: PropTypes.string,
    questionUid: PropTypes.string,
  }),
  userName: PropTypes.string,
};
