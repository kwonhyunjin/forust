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
        <section>
          {/* @todo 답글 개수에 따라 단수, 복수 표현 */}
          <h2 className="card-list-heading">2 Answers</h2>
          <div role="list">
            <AnswerCard role="listitem" />
            <AnswerCard role="listitem" />
            <AnswerWritingCard role="listitem" />
          </div>
        </section>
      </article>
    </DefaultLayout>
  );
}
