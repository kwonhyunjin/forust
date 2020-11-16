import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import firebase from '@/firebase/index';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import React, {
  useEffect, useMemo, useRef, useState,
} from 'react';
import { useForm, Controller } from 'react-hook-form';

const Editor = dynamic(
  () => import('@/components/editor/editor'),
  { ssr: false },
);

export default function AnswerWritingForm({
  answer, button, onUpdate, props,
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
  const checkAnswer = useMemo(() => answer != null, [answer]);
  const [saveEdit, setSaveEdit] = useState();

  useEffect(() => {
    if (!checkAnswer) { return undefined; }
    return setSaveEdit(answer);
  }, [checkAnswer]);

  const handleFormSubmit = async (data) => {
    clearErrors();
    setDisabled(true);
    // 수정을 누르면 edit이 false -> Save edits 버튼을 누르면 edit이 true가 되어야 함
    try {
      if (saveEdit) {
        const newSaveEditRef = firebase.firestore().collection('answer').doc(saveEdit.answerUid);
        await newSaveEditRef.update({
          content: data.content,
          updated: firebase.firestore.Timestamp.now(),
        });
        onUpdate();
      }
      const newAnswerRef = firebase.firestore().collection('answer').doc();
      await newAnswerRef.set({
        displayName: firebase.auth().currentUser.displayName,
        authorUid: currentUser.uid,
        content: data.content,
        created: firebase.firestore.Timestamp.now(),
        questionUid,
        answerUid: newAnswerRef.id,
      });
      onUpdate();
    } catch (err) {
      // @todo 에러 메세지 노출
    }
    setDisabled(false);
  };

  return (
    <form className="answer-writing-card__form" onSubmit={handleSubmit(handleFormSubmit)}>
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
                  initialValue={answer ? answer.content : ''}
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
      <Button
        type="submit"
        className="answer-writing-card__submit"
        disabled={disabled}
      >
        {button}
      </Button>
    </form>
  );
}

AnswerWritingForm.propTypes = {
  answer: PropTypes.shape({
    id: PropTypes.string,
    content: PropTypes.string,
  }),
  button: PropTypes.string,
  className: PropTypes.string,
  onUpdate: PropTypes.func,
  props: PropTypes.node,
};
