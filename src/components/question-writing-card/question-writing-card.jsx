import Button from '@/components/button/button';
import FormField from '@/components/form-field/form-field';
import TextArea from '@/components/text-area/text-area';
import TextField from '@/components/text-field/text-field';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function QuestionWritingCard({ className, ...rest }) {
  return (
    <div {...rest} className={classNames('card question-writing-card', className)}>
      <h2 className="question-writing-card__heading">Ask a question</h2>
      <form className="question-writing-card__form">
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField label="Title" description="Be specific and imagine you’re asking a question to another person">
              <TextField type="text" />
            </FormField>
          </div>
        </div>
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField label="Content" description="Include all the information someone would need to answer your question">
              <TextArea className="question-writing-card__field" />
            </FormField>
          </div>
        </div>
        <div className="grid-row form-row">
          <div className="grid-col">
            <FormField label="Tags" description="Add up to 5 tags to describe what your question is about">
              <TextField type="text" />
            </FormField>
          </div>
        </div>
        <Button className="question-writing-card__submit" type="submit">Review your question</Button>
      </form>
    </div>
  );
}

QuestionWritingCard.propTypes = {
  className: PropTypes.string,
};
