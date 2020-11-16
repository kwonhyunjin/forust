import Comment from '@/components/comment/comment';
import Confirm from '@/components/confirm/confirm';
import Icon from '@/components/icon/icon';
import PostComments from '@/components/post-comments/post-comments';
import PostProfile from '@/components/post-profile/post-profile';
import PostTags from '@/components/post-tags/post-tags';
import PostVote from '@/components/post-vote/post-vote';
import Tag from '@/components/tag/tag';
import firebase from '@/firebase/index';
import { LOCALE_DATE_TIME_FORMAT } from '@/utils/date';
import { TIMESTAMP_PROP_TYPES } from '@/utils/react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React from 'react';

const Viewer = dynamic(
  () => import('@/components/viewer/viewer'),
  { ssr: false },
);

dayjs.extend(relativeTime);

export default function QuestionCard({
  className, question, ...rest
}) {
  const router = useRouter();

  const { currentUser } = firebase.auth();

  const isUser = currentUser?.uid != null;
  const isAuthor = question.authorUid === currentUser?.uid;

  const handleEdit = () => {
    if (!isUser) {
      router.push('/login');
      return;
    }
    router.push(`/forum/write/${question.questionUid}`);
  };

  const handleDelete = async () => {
    if (!isUser) {
      router.push('/login');
    } else if (isAuthor) {
      if (await Confirm.fn({ ok: 'Delete', heading: 'Are you sure you want to delete it?' })) {
        // @todo delete 대신 '삭제됨' 필드 값 변경
        firebase.firestore()
          .collection('question')
          .doc(question.questionUid)
          .delete();
        router.push('/forum/list');
      }
    }
  };

  return (
    <div {...rest} className={classNames('card question-card', className)}>
      <div className="question-card__header">
        <h2 className="question-card__title">{question.title}</h2>
        <div className="question-card__count">
          <span className="question-card__count-item">
            Asked
            {' '}
            {dayjs.unix(question.created.seconds).format(LOCALE_DATE_TIME_FORMAT)}
          </span>
          {/* @todo 활동 시간, 조회수 개발 예정 */}
          <span className="question-card__count-item">Active 3 days ago</span>
          <span className="question-card__count-item">Viewed 1.5m times</span>
        </div>
        <PostVote className="question-card__vote" />
      </div>
      <div className="question-card__content">
        <Viewer
          initialValue={question.content}
        />
      </div>
      <PostTags className="question-card__tags">
        {question.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
      </PostTags>
      <PostProfile
        className="question-card__profile"
        author={question.displayName}
        created={question.created}
      />
      <div className="question-card__actions">
        {(isAuthor || !isUser)
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
  question: PropTypes.shape({
    authorUid: PropTypes.string,
    displayName: PropTypes.string,
    content: PropTypes.string,
    created: TIMESTAMP_PROP_TYPES,
    tags: PropTypes.node,
    title: PropTypes.string,
    questionUid: PropTypes.string,
  }),
  userName: PropTypes.string,
};
