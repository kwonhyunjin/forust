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
      <h2 className="question-writing-card__heading" id="forum-write-heading">Ask a question</h2>
      <form className="question-writing-card__form">
        <FormField className="grid-row" label="Title">
          <TextField type="text" id="title" />
          <span className="question-writing-card__label">Be specific and imagine you’re asking a question to another person</span>
        </FormField>
        <FormField className="grid-row" label="Content">
          <TextArea className="question-writing-card__field" />
          <span className="question-writing-card__label">Include all the information someone would need to answer your question</span>
        </FormField>
        <FormField className="grid-row" label="Tags">
          <TextField type="text" id="tags" />
          <span className="question-writing-card__label">Add up to 5 tags to describe what your question is about</span>
        </FormField>
        <Button className="question-writing-card__submit" type="submit">Review your question</Button>
      </form>
    </div>
  );
}

QuestionWritingCard.propTypes = {
  className: PropTypes.string,
};
