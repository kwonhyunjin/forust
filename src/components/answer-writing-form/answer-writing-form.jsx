import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import dynamic from 'next/dynamic';
import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

const Editor = dynamic(
  () => import('@/components/editor/editor'),
  { ssr: false },
);

export default function AnswerWritingForm({
  button, props,
}) {
  const [disabled, setDisabled] = useState(false);
  const editorRef = useRef(null);
  const {
    clearErrors, errors, handleSubmit, control,
  } = useForm({
    mode: 'onSubmit',
  });

  const handleFormSubmit = async () => {
    clearErrors();
    setDisabled(true);
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
  button: PropTypes.string,
  props: PropTypes.node,
};
