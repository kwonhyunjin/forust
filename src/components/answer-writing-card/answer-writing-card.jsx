import Button from '@/components/button/button';
import TextArea from '@/components/text-area/text-area';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function AnswerWritingCard({ className, ...rest }) {
  return (
    <div {...rest} className={classNames('card answer-writing-card', className)} role="listitem">
      <h3 className="answer-writing-card__heading">Your answer</h3>
      <TextArea className="answer-writing-card__field" placeholder="Write your answer here." />
      <Button type="submit" className="answer-writing-card__submit">Post yout answer</Button>
    </div>
  );
}

AnswerWritingCard.propTypes = {
  className: PropTypes.string,
};
