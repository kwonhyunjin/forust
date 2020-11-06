import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import firebase from '@/firebase/index';
import classNames from 'classnames';
import dayjs from 'dayjs';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, {
  useMemo, useRef, useState,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

const Editor = dynamic(
  () => import('@/components/editor/editor'),
  { ssr: false },
);

export default function QuestionWritingCard({
  className, props, originalPost, isEdit, ...rest
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
    register, clearErrors, errors, handleSubmit, control,
  } = useForm({
    mode: 'onSubmit',
    defaultValues,
  });

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    try {
      if (originalPost) {
        const newPostRef = firebase.firestore().collection('question').doc(originalPost.questionUid);
        await newPostRef.update({
          title: data.title,
          content: data.content,
          tags: data.tags.trim().split(/\s+/),
          updated: dayjs().format(),
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
        created: dayjs().format(),
        questionUid: newPostRef.id,
      });
      router.push(`/forum/detail/${newPostRef.id}`);
    } catch (err) {
      // @todo 에러 메세지 노출
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
              description="Be specific and imagine you’re asking a question to another person"
              error={errors.title?.message}
            >
              <TextField
                type="text"
                name="title"
                ref={
                  register({
                    required: 'Enter a title',
                    minLength: {
                      value: 15,
                      message: 'Use 15 characters or more for a title',
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
              description="Include all the information someone would need to answer your question"
              error={errors.content?.message}
            >
              <Controller
                control={control}
                name="content"
                defaultValue=""
                render={({ onChange }) => (
                  <Editor
                    {...props}
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
                  required: 'Enter a body',
                  minLength: {
                    value: 30,
                    message: 'Use 30 characters or more for a body',
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
              description="Add up to 5 tags to describe what your question is about"
              error={errors.tags?.message}
            >
              <TextField
                type="text"
                name="tags"
                ref={
                  register({
                    required: 'Enter at least one tag',
                    validate: (value) => value.trim().split(/\s+/).length < 6 || 'Please enter no more than 5 tags',
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
      </form>
    </div>
  );
}

QuestionWritingCard.propTypes = {
  className: PropTypes.string,
  isEdit: PropTypes.bool,
  props: PropTypes.node,
  originalPost: PropTypes.shape({
    authorUid: PropTypes.string,
    content: PropTypes.string,
    created: PropTypes.string,
    tags: PropTypes.node,
    title: PropTypes.string,
    questionUid: PropTypes.string,
  }),
};
