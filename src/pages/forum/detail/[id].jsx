import AnswerCard from '@/components/answer-card/answer-card';
import AnswerWritingCard from '@/components/answer-writing-card/answer-writing-card';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionCard from '@/components/question-card/question-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export const getServerSideProps = async ({ query }) => {
  const content = {};

  await firebase.firestore()
    .collection('question')
    .doc(query.id)
    .get()
    .then((result) => {
      content.author = result.data().author;
      content.title = result.data().title;
      content.content = result.data().content;
      content.tags = result.data().tags;
      content.updated = result.data().updated;
    });

  return {
    props: {
      author: content.author,
      title: content.title,
      content: content.content,
      tags: content.tags,
      updated: content.updated,
    },
  };
};

export default function ForumDetail(props) {
  return (
    <DefaultLayout>
      <article className="card-list">
        <QuestionCard posts={props} />
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
