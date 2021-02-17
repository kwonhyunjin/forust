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
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [totalLen, setTotalLen] = useState();
  const { currentUser } = firebase.auth();

  const router = useRouter();
  const currentPage = Number((router.query.slug ?? [])[0]) || 1;
  const currentPerPage = Number(router.query.perPage) || 5;

  const indexOfLastQuestion = currentPage * currentPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - currentPerPage;

  // @todo Firebase에 count 기능 구현 시 대체
  const fetchQuestions = useCallback(async () => {
    await firebase.firestore()
      .collection('question')
      .orderBy('created', 'desc')
      .onSnapshot((snap) => {
        const newQuestions = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTotalLen(newQuestions.length);
        setQuestions(newQuestions.slice(indexOfFirstQuestion, indexOfLastQuestion));
        setLoading(false);
      });
    return () => setLoading(true);
  }, [questions, indexOfFirstQuestion, indexOfLastQuestion]);

  useEffect(() => {
    fetchQuestions();
  }, [currentPage, currentPerPage]);

  const handleChange = useCallback((page, perPage) => {
    router.push(`/forum/list/${page}?perPage=${perPage}`);
  }, []);

  // @todo 결과가 없을 때 UI 추가
  return (
    <DefaultLayout>
      {!loading && (
        <section>
          <CardListHeader>
            <CardListHeader.Heading level="2" size="2">
              {totalLen === 1 ? `${totalLen} Question` : `${totalLen} Questions`}
            </CardListHeader.Heading>
            <CardListHeader.Actions>
              <Link href={currentUser ? '/forum/write' : '/login'}>
                <Button type="anchor">Ask Question</Button>
              </Link>
            </CardListHeader.Actions>
          </CardListHeader>
          <ul className="card-list">
            {questions.map((question) => (
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
              totalLen={totalLen}
              onChange={handleChange}
            />
          )}
        </section>
      )}
    </DefaultLayout>
  );
};

export default ForumList;
