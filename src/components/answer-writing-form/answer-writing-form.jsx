import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import firebase from '@/firebase/index';
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

export default function AnswerWritingForm({
  answer, onUpdate,
}) {
  const [disabled, setDisabled] = useState(false);
  const editorRef = useRef(null);
  const { currentUser } = firebase.auth();
  const router = useRouter();
  const questionUid = router.query.id;
  const {
    clearErrors, errors, handleSubmit, control,
  } = useForm({
    mode: 'onSubmit',
  });
  const hasAnswer = useMemo(() => answer != null, [answer]);

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    try {
      if (hasAnswer) {
        const newSaveEditRef = firebase.firestore().collection('answer').doc(answer.answerUid);
        await newSaveEditRef.update({
          content: data.content,
          updated: firebase.firestore.Timestamp.now(),
        });
      } else {
        const newAnswerRef = firebase.firestore().collection('answer').doc();
        await newAnswerRef.set({
          displayName: firebase.auth().currentUser.displayName,
          authorUid: currentUser.uid,
          content: data.content,
          created: firebase.firestore.Timestamp.now(),
          questionUid,
          answerUid: newAnswerRef.id,
        });
      }
      await onUpdate();
    } catch (err) {
      console.error(err);
    }
    setDisabled(false);
  };

  const onCancel = useCallback(() => {
    onUpdate({ setEdit: false });
  }, [onUpdate]);

  return (
    <form className="answer-writing-card__form" onSubmit={handleSubmit(handleFormSubmit)}>
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
                  initialValue={answer ? answer.content : ''}
                  onChange={() => onChange(editorRef.current.getInstance().getMarkdown())}
                />
              )}
              rules={{
                required: 'Enter a body',
                minLength: {
                  value: 30,
                  message: 'Use 30 characters or more for a body.',
                },
              }}
            />
          </FormField>
        </div>
      </div>
      <Button
        type="submit"
        className="answer-writing-card__submit"
        disabled={disabled}
      >
        {answer ? 'Save edits' : 'Post your answer'}
      </Button>
      {answer && (
      <Button
        className="answer-writing-card__cancel"
        color="error"
        onClick={onCancel}
      >
        Cancel
      </Button>
      )}
    </form>
  );
}

AnswerWritingForm.propTypes = {
  answer: PropTypes.shape({
    answerUid: PropTypes.string,
    content: PropTypes.string,
    id: PropTypes.string,
  }),
  onUpdate: PropTypes.func,
};
