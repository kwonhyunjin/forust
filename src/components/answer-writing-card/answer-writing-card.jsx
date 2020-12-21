import AnswerWritingForm from '@/components/answer-writing-form/answer-writing-form';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

export default function AnswerWritingCard({
  className, onUpdate, ...rest
}) {
  return (
    <div {...rest} className={classNames('card answer-writing-card', className)} role="listitem">
      <h3 className="answer-writing-card__heading">Your answer</h3>
      <AnswerWritingForm onUpdate={onUpdate} />
    </div>
  );
}

AnswerWritingCard.propTypes = {
  className: PropTypes.string,
  onUpdate: PropTypes.func,
};
