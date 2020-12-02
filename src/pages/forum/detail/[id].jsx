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
      content.authorUid = result.data().authorUid;
      content.displayName = result.data().displayName;
      content.title = result.data().title;
      content.content = result.data().content;
      content.tags = result.data().tags;
      content.created = result.data().created;
      content.questionUid = result.data().questionUid;
    });

  return {
    props: {
      authorUid: content.authorUid,
      displayName: content.displayName,
      title: content.title,
      content: content.content,
      tags: content.tags,
      created: JSON.parse(JSON.stringify(content.created)),
      questionUid: content.questionUid,
    },
  };
};

export default function ForumDetail(props) {
  return (
    <DefaultLayout>
      <article className="card-list">
        <QuestionCard question={props} />
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
