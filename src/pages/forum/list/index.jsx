import QuestionCard from '@/components/question-card/question-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumList() {
  return (
    <>
      <DefaultLayout>
        <h2 className="blind" id="forum-list">Question list</h2>
        <div className="forum-list" aria-labelledby="forum-list" role="list">
          <QuestionCard role="listitem" />
          <QuestionCard role="listitem" />
          <QuestionCard role="listitem" />
        </div>
      </DefaultLayout>
    </>
  );
}
