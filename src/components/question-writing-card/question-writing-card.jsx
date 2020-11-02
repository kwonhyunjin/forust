import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextField from '@/components/text-field/text-field';
import firebase from '@/firebase/index';
import classNames from 'classnames';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const Editor = dynamic(
  () => import('@/components/editor/editor'),
  { ssr: false },
);

export default function QuestionWritingCard({ className, props, ...rest }) {
  const router = useRouter();
  const [disabled, setDisabled] = useState(false);
  const editorRef = useRef(null);
  const { currentUser } = firebase.auth();

  const {
    register, clearErrors, errors, handleSubmit, control,
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    try {
      await firebase.firestore()
        .collection('question')
        .add({
          author: currentUser.displayName,
          title: data.title,
          content: data.content,
          tags: data.tags.trim().split(/\s+/),
          updated: new Date(),
        })
        .then((doc) => {
          router.push(`/forum/detail/${doc.id}`);
        });
    } catch (err) {
      //
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
        <Button className="question-writing-card__submit" type="submit" disabled={disabled}>Review your question</Button>
      </form>
    </div>
  );
}

QuestionWritingCard.propTypes = {
  className: PropTypes.string,
  props: PropTypes.node,
};
