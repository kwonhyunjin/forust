import Button from '@/components/button/button';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ForumList = () => {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const questionsLen = questions.length;
  const { currentUser } = firebase.auth();

  useEffect(() => {
    firebase.firestore()
      .collection('question')
      .onSnapshot((snap) => {
        const newQuestions = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).sort((a, b) => b.created.seconds - a.created.seconds);
        setQuestions(newQuestions);
        setLoading(false);
      });
    setLoading(true);
  }, []);

  return (
    <DefaultLayout>
      {!loading && (
        <section>
          <CardListHeader>
            <CardListHeader.Heading level="2" size="2">
              {questionsLen === 1 ? `${questionsLen} Question` : `${questionsLen} Questions`}
            </CardListHeader.Heading>
            <CardListHeader.Actions>
              <Link href={currentUser ? '/forum/write' : '/login'}>
                <Button type="anchor">Ask Question</Button>
              </Link>
            </CardListHeader.Actions>
          </CardListHeader>
          <ul className="card-list">
            {questions.map((question) => <li key={question.id}><QuestionSummaryCard question={question} /></li>)}
          </ul>
        </section>
      )}
    </DefaultLayout>
  );
};

export default ForumList;
