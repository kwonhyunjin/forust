import QuestionCard from '@/components/question-card/question-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumList() {
  return (
    <>
      <DefaultLayout>
        <h2 className="visually-hidden" id="forum-list">ForumList</h2>
        <QuestionCard className="forum-list" aria-labelledby="forum-list" />
      </DefaultLayout>
    </>
  );
}
