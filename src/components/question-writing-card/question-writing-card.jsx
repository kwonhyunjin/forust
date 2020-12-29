import Button from '@/components/button/button';
import Confirm from '@/components/confirm/confirm';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import firebase from '@/firebase/index';
import { TIMESTAMP_PROP_TYPES } from '@/utils/react';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, {
  useCallback, useMemo, useRef, useState,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

const Editor = dynamic(
  () => import('@/components/editor/editor'),
  { ssr: false },
);

export default function QuestionWritingCard({
  className, originalPost, isEdit, ...rest
}) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const editorRef = useRef(null);
  const { currentUser } = firebase.auth();

  const defaultValues = useMemo(() => (originalPost != null ? {
    title: originalPost.title,
    content: originalPost.content,
    tags: originalPost.tags.join(' '),
  } : undefined), [originalPost]);

  const {
    register, clearErrors, errors, handleSubmit, control, getValues,
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
  });

  const originalPostFallbackUrl = useMemo(() => (originalPost ? `/forum/detail/${originalPost.questionUid}` : '/forum/list'), [originalPost]);

  const handleConfirm = useCallback(async () => {
    if (await Confirm.open({
      ok: 'Discard changes',
      heading: 'Are you sure?',
      description:
  <>
    Are you sure you want to discard your unsaved changes?
    <br />
    This action cannot be reversed.
  </>,
    })) {
      router.push(originalPostFallbackUrl);
    }
  }, [originalPostFallbackUrl]);

  const handleCancel = useCallback(() => {
    if (!originalPost) {
      if (getValues('title') !== '' || editorRef.current.getInstance().getMarkdown() !== '' || getValues('tags') !== '') {
        handleConfirm();
        return;
      }
      router.push(originalPostFallbackUrl);
    } else {
      if (originalPost.title !== getValues('title') || originalPost.content !== editorRef.current.getInstance().getMarkdown() || originalPost.tags.join(' ') !== getValues('tags')) {
        handleConfirm();
        return;
      }
      router.push(originalPostFallbackUrl);
    }
  }, [originalPost]);

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    try {
      if (originalPost) {
        // @todo update 대신 새로운 값으로 insert
        const newPostRef = firebase.firestore().collection('question').doc(originalPost.questionUid);
        await newPostRef.update({
          title: data.title,
          content: data.content,
          tags: data.tags.trim().split(/\s+/),
          updated: firebase.firestore.Timestamp.now(),
        });
        router.push(`/forum/detail/${originalPost.questionUid}`);
        return;
      }
      const newPostRef = firebase.firestore().collection('question').doc();
      await newPostRef.set({
        displayName: firebase.auth().currentUser.displayName,
        authorUid: currentUser.uid,
        title: data.title,
        content: data.content,
        tags: data.tags.trim().split(/\s+/),
        created: firebase.firestore.Timestamp.now(),
        questionUid: newPostRef.id,
      });
      router.push(`/forum/detail/${newPostRef.id}`);
    } catch (err) {
      console.error(err);
    }
    setDisabled(false);
  };

  return (
    <div {...rest} className={classNames('card question-writing-card', className)}>
      <h2 className="question-writing-card__heading">Ask a question</h2>
      <form className="question-writing-card__form" onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField
              label="Title"
              description="Be specific and imagine you’re asking a question to another person."
              error={errors.title?.message}
            >
              <TextField
                type="text"
                name="title"
                ref={
                  register({
                    required: 'Enter a title.',
                    minLength: {
                      value: 15,
                      message: 'Use 15 characters or more for a title.',
                    },
                  })
                }
              />
            </FormField>
          </div>
        </div>
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField
              label="Content"
              description="Include all the information someone would need to answer your question."
              error={errors.content?.message}
            >
              <Controller
                control={control}
                name="content"
                defaultValue=""
                render={({ onChange }) => (
                  <Editor
                    previewStyle="vertical"
                    height="400px"
                    initialEditType="markdown"
                    useCommandShortcut
                    innerRef={editorRef}
                    initialValue={originalPost ? originalPost.content : ''}
                    onChange={() => onChange(editorRef.current.getInstance().getMarkdown())}
                  />
                )}
                rules={{
                  required: 'Enter a body.',
                  minLength: {
                    value: 30,
                    message: 'Use 30 characters or more for a body.',
                  },
                }}
              />
            </FormField>
          </div>
        </div>
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField
              label="Tags"
              description="Add up to 5 tags to describe what your question is about. Tags separated by spaces."
              error={errors.tags?.message}
            >
              <TextField
                type="text"
                name="tags"
                ref={
                  register({
                    required: 'Enter at least one tag.',
                    validate: (value) => value.trim().split(/\s+/).length < 6 || 'Please enter no more than 5 tags.',
                  })
                }
              />
            </FormField>
          </div>
        </div>
        <Button
          className="question-writing-card__submit"
          type="submit"
          disabled={disabled}
        >
          {isEdit ? 'Update your question' : 'Review your question'}
        </Button>
        <Button
          className="question-writing-card__cancel"
          color="error"
          onClick={handleCancel}
        >
          Cancel
        </Button>
      </form>
    </div>
  );
}

QuestionWritingCard.propTypes = {
  className: PropTypes.string,
  isEdit: PropTypes.bool,
  originalPost: PropTypes.shape({
    authorUid: PropTypes.string,
    content: PropTypes.string,
    created: TIMESTAMP_PROP_TYPES,
    tags: PropTypes.node,
    title: PropTypes.string,
    questionUid: PropTypes.string,
  }),
};
