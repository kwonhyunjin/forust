import QuestionWritingCard from '@/components/question-writing-card/question-writing-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import { useRouter } from 'next/router';
import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';

export default function ForumWrite() {
  const router = useRouter();
  const questionUid = (router.query.slug ?? [])[0];
  const [question, setQuestion] = useState();
  const { currentUser } = firebase.auth();
  const isEdit = useMemo(() => questionUid != null, [questionUid]);

  const rejectAccess = useCallback(() => {
    const fallbackUrl = questionUid ? `/forum/detail/${questionUid}` : '/forum/list';
    // eslint-disable-next-line no-alert
    alert('Make sure you have rights.');
    router.replace(fallbackUrl);
  }, [questionUid, router]);

  useEffect(() => {
    if (currentUser == null) { return rejectAccess(); }
    if (!isEdit) { return undefined; }

    const unsub = firebase.firestore()
      .collection('question')
      .doc(questionUid)
      .onSnapshot((doc) => {
        const data = doc.data();
        if (data != null && data.authorUid === currentUser.uid) {
          setQuestion(data);
        } else {
          unsub();
          rejectAccess();
        }
      });

    return () => { unsub(); };
  }, [currentUser, isEdit, questionUid]);

  return (
    <DefaultLayout>
      <section>
        {(!questionUid || question) && (
          <QuestionWritingCard originalPost={question} isEdit={isEdit} />
        )}
      </section>
    </DefaultLayout>
  );
}
