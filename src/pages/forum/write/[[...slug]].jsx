import QuestionWritingCard from '@/components/question-writing-card/question-writing-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import { useRouter } from 'next/router';
import React, {
  useCallback, useEffect, useState, useMemo,
} from 'react';

export default function ForumWrite() {
  const router = useRouter();
  const postId = router.query.slug[0];
  const [post, setPost] = useState();
  const { currentUser } = firebase.auth();
  const isEdit = useMemo(() => postId != null, [postId]);

  const rejectAccess = useCallback(() => {
    const fallbackUrl = postId ? `/forum/detail/${postId}` : '/forum/list';
    // eslint-disable-next-line no-alert
    alert('Make sure you have edit rights.');
    router.replace(fallbackUrl);
  }, [postId, router]);

  useEffect(() => {
    if (currentUser == null) { return rejectAccess(); }
    if (!isEdit) { return undefined; }

    const unsub = firebase.firestore()
      .collection('question')
      .doc(postId)
      .onSnapshot((doc) => {
        const data = doc.data();
        if (data != null && data.authorUid === currentUser.uid) {
          setPost(data);
        } else {
          unsub();
          rejectAccess();
        }
      });

    return () => { unsub(); };
  }, [currentUser.uid, isEdit, postId]);

  return (
    <DefaultLayout>
      <section>
        {(!postId || post) && (
          <QuestionWritingCard originalPost={post} isEdit={isEdit} />
        )}
      </section>
    </DefaultLayout>
  );
}
