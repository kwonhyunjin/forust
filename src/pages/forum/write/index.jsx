import QuestionWritingCard from '@/components/question-writing-card/question-writing-card';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumWrite() {
  return (
    <DefaultLayout>
      <section>
        <QuestionWritingCard />
      </section>
    </DefaultLayout>
  );
}
