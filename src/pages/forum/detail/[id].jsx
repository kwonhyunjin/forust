import AnswerCard from '@/components/answer-card/answer-card';
import AnswerWritingCard from '@/components/answer-writing-card/answer-writing-card';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionCard from '@/components/question-card/question-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';

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
  const [answers, setAnswers] = useState([]);
  const answersLen = answers.length;
  const { questionUid } = props;

  const fetchAnswers = useCallback(async () => {
    await firebase.firestore()
      .collection('answer')
      .where('questionUid', '==', questionUid)
      .get()
      .then((snap) => {
        const newAnswers = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).sort((a, b) => b.created.seconds - a.created.seconds);
        setAnswers(newAnswers);
      });
  }, [answers]);

  useEffect(() => {
    fetchAnswers();
  }, [questionUid]);

  const handleUpdate = useCallback(async () => {
    await fetchAnswers();
  }, [fetchAnswers]);

  return (
    <DefaultLayout>
      <article className="card-list">
        <QuestionCard question={props} />
        <section>
          <CardListHeader>
            <CardListHeader.Heading level="2" size="3">
              {answersLen === 1 ? `${answersLen} Answer` : `${answersLen} Answers`}
            </CardListHeader.Heading>
          </CardListHeader>
          <div role="list">
            {answers.map((answer) => <AnswerCard answer={answer} onUpdate={handleUpdate} key={answer.id} role="listitem" />)}
            <AnswerWritingCard onUpdate={handleUpdate} role="listitem" />
          </div>
        </section>
      </article>
    </DefaultLayout>
  );
}

ForumDetail.propTypes = {
  questionUid: PropTypes.string,
};
