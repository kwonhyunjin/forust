import Button from '@/components/button/button';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import Link from 'next/link';
import React from 'react';

export default function ForumList() {
  return (
    <DefaultLayout>
      <section>
        <CardListHeader>
          <CardListHeader.Heading level="2" size="2">
            {/* @todo 질문 개수에 따라 단수, 복수 표현 */}
            3 Questions
          </CardListHeader.Heading>
          <CardListHeader.Actions>
            <Link href="/forum/write">
              <Button type="anchor">Ask Question</Button>
            </Link>
          </CardListHeader.Actions>
        </CardListHeader>
        <ul className="card-list">
          <li><QuestionSummaryCard /></li>
          <li><QuestionSummaryCard /></li>
          <li><QuestionSummaryCard /></li>
        </ul>
      </section>
    </DefaultLayout>
  );
}
