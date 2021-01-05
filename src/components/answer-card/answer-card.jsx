import AnswerWritingForm from '@/components/answer-writing-form/answer-writing-form';
import Comment from '@/components/comment/comment';
import Confirm from '@/components/confirm/confirm';
import Icon from '@/components/icon/icon';
import PostComments from '@/components/post-comments/post-comments';
import PostProfile from '@/components/post-profile/post-profile';
import PostVote from '@/components/post-vote/post-vote';
import firebase from '@/firebase/index';
import { TIMESTAMP_PROP_TYPES } from '@/utils/react';
import classNames from 'classnames';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';

dayjs.extend(relativeTime);

const Viewer = dynamic(
  () => import('@/components/viewer/viewer'),
  { ssr: false },
);

export default function AnswerCard({
  answer, children, className, onUpdate, ...rest
}) {
  const router = useRouter();

  const { currentUser } = firebase.auth();

  const isUser = currentUser?.uid != null;
  const isAuthor = answer.authorUid === currentUser?.uid;
  const [isEdit, setIsEdit] = useState(false);

  const handleEdit = useCallback(() => {
    if (!isUser) {
      router.push('/login');
      return;
    }
    setIsEdit(!isEdit);
  }, [isUser, isEdit]);

  const handleUpdate = useCallback(async () => {
    await onUpdate();
    await setIsEdit(false);
  }, [isEdit]);

  const handleDelete = async () => {
    if (!isUser) {
      router.push('/login');
    } else if (isAuthor) {
      if (await Confirm.open({ ok: 'Delete', okColor: 'error', heading: 'Are you sure you want to delete it?' })) {
        // @todo delete 대신 '삭제됨' 필드 값 변경
        firebase.firestore()
          .collection('answer')
          .doc(answer.answerUid)
          .delete();
        onUpdate();
      }
    }
  };

  return (
    <div {...rest} className={classNames('card answer-card', className)}>
      <h3 className="blind">
        {answer.displayName}
        &apos;s answer
      </h3>
      {!isEdit && (
        <>
          <div className="answer-card__header">
            <div className="answer-card__content">
              <Viewer
                initialValue={answer.content}
              />
            </div>
            <PostVote className="answer-card__vote" />
          </div>
          <PostProfile
            className="answer-card__profile"
            author={answer.displayName}
            created={answer.created}
          />
          <div className="answer-card__actions">
            {(isAuthor || !isUser)
        && (
        <>
          <button type="button" className="answer-card__action-item" onClick={handleEdit}>
            <Icon type="pencil" className="answer-card__action-icon" aria-hidden="true" />
            Edit
          </button>
          <button type="button" className="answer-card__action-item" onClick={handleDelete}>
            <Icon type="trash" className="answer-card__action-icon" aria-hidden="true" />
            Delete
          </button>
        </>
        )}
            <button type="button" className="answer-card__action-item">
              <Icon type="share" className="answer-card__action-icon" aria-hidden="true" />
              Share
            </button>
          </div>
        </>
      )}
      {isEdit && (
        <AnswerWritingForm answer={answer} onUpdate={handleUpdate} />
      )}
      <PostComments className="answer-card__comment">
        <Comment className="answer-card__comment-item" role="listitem" user="Gyumin" date="5 month ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
        <Comment className="answer-card__comment-item" role="listitem" user="Hyunjin" date="8 years ago">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Comment>
      </PostComments>
    </div>
  );
}

AnswerCard.propTypes = {
  answer: PropTypes.shape({
    answerUid: PropTypes.string,
    authorUid: PropTypes.string,
    displayName: PropTypes.string,
    content: PropTypes.string,
    created: TIMESTAMP_PROP_TYPES,
    questionUid: PropTypes.string,
  }),
  children: PropTypes.node,
  className: PropTypes.string,
  onUpdate: PropTypes.func,
};
