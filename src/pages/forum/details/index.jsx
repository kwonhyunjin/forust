import AnswerCard from '@/components/answer-card/answer-card';
import AnswerWritingCard from '@/components/answer-writing-card/answer-writing-card';
import QuestionCard from '@/components/question-card/question-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumDetails() {
  return (
    <DefaultLayout>
      <article className="card-list">
        <QuestionCard />
        <AnswerCard />
        <AnswerWritingCard />
      </article>
    </DefaultLayout>
  );
}
