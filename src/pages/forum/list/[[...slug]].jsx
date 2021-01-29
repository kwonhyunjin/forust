import Button from '@/components/button/button';
import CardListHeader from '@/components/card-list-header/card-list-header';
import Pagination from '@/components/pagination/pagination';
import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useCallback, useState } from 'react';

const ForumList = () => {
  const router = useRouter();
  const currentPage = Number((router.query.slug ?? [])[0]) || 1;

  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const questionsLen = questions.length;
  const { currentUser } = firebase.auth();

  const currentPerPage = Number(router.query.perPage) || 5;
  const indexOfLastQuestion = currentPage * currentPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - currentPerPage;
  const currentPageQuestions = questions.slice(indexOfFirstQuestion, indexOfLastQuestion);

  const handleChange = useCallback((page, perPage) => {
    router.push(`/forum/list/${page}?perPage=${perPage}`);
  }, []);

  const fetchAnswers = useCallback(async () => {
    await firebase.firestore()
      .collection('question')
      .onSnapshot((snap) => {
        const newQuestions = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })).sort((a, b) => b.created.seconds - a.created.seconds);
        setQuestions(newQuestions);
        setLoading(false);
      });
    return () => setLoading(true);
  }, [questions]);

  useEffect(() => {
    fetchAnswers();
  }, [currentPage, currentPerPage]);

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
            {currentPageQuestions.map((question) => (
              <li
                key={question.id}
                question={question}
              >
                <QuestionSummaryCard question={question} />
              </li>
            ))}
          </ul>
          {questions && (
            <Pagination
              page={currentPage}
              perPage={currentPerPage}
              totalLen={questionsLen}
              onChange={handleChange}
            />
          )}
        </section>
      )}
    </DefaultLayout>
  );
};

export default ForumList;
