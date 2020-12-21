import Button from '@/components/button/button';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ForumList = () => {
  const [questions, setQuestions] = useState([]);
  const questionsLen = questions.length;

  useEffect(() => {
    firebase.firestore()
      .collection('question')
      .onSnapshot((snap) => {
        const question = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(question);
      });
  }, []);

  return (
    <DefaultLayout>
      <section>
        <CardListHeader>
          <CardListHeader.Heading level="2" size="2">
            {questionsLen === 1 ? `${questionsLen} Question` : `${questionsLen} Questions`}
          </CardListHeader.Heading>
          <CardListHeader.Actions>
            <Link href="/forum/write">
              <Button type="anchor" href="/login">Ask Question</Button>
            </Link>
          </CardListHeader.Actions>
        </CardListHeader>
        <ul className="card-list">
          {questions.map((question) => <li key={question.id}><QuestionSummaryCard question={question} /></li>)}
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default ForumList;
