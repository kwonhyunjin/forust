import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumList() {
  return (
    <DefaultLayout>
      <section aria-labelledby="forum-list-heading">
        <h2 className="blind" id="forum-list-heading">Question list</h2>
        <div className="forum forum-list" role="list">
          <QuestionSummaryCard role="listitem" />
          <QuestionSummaryCard role="listitem" />
          <QuestionSummaryCard role="listitem" />
        </div>
      </section>
    </DefaultLayout>
  );
}
