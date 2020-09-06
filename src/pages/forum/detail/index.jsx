import AnswerCard from '@/components/answer-card/answer-card';
import AnswerWritingCard from '@/components/answer-writing-card/answer-writing-card';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionCard from '@/components/question-card/question-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumDetail() {
  return (
    <DefaultLayout>
      <article className="card-list">
        <QuestionCard />
        <section>
          <CardListHeader>
            <CardListHeader.Heading level="2" size="3">
              {/* @todo 답글 개수에 따라 단수, 복수 표현 */}
              2 Answers
            </CardListHeader.Heading>
          </CardListHeader>
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
