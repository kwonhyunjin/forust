import Button from '@/components/button/button';
import CardListHeader from '@/components/card-list-header/card-list-header';
import QuestionSummaryCard from '@/components/question-summary-card/question-summary-card';
import firebase from '@/firebase/index';
import DefaultLayout from '@/layouts/default-layout/default-layout';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const ForumList = () => {
  const [posts, setPosts] = useState([]);
  const postNum = posts.length;

  useEffect(() => {
    firebase.firestore()
      .collection('question')
      .onSnapshot((snap) => {
        const post = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(post);
      });
  }, []);

  return (
    <DefaultLayout>
      <section>
        <CardListHeader>
          <CardListHeader.Heading level="2" size="2">
            {postNum === 1 ? `${postNum} Question` : `${postNum} Questions`}
          </CardListHeader.Heading>
          <CardListHeader.Actions>
            <Link href="/forum/write">
              <Button type="anchor">Ask Question</Button>
            </Link>
          </CardListHeader.Actions>
        </CardListHeader>
        <ul className="card-list">
          {posts.map((post) => <li key={post.id}><QuestionSummaryCard posts={post} /></li>)}
        </ul>
      </section>
    </DefaultLayout>
  );
};

export default ForumList;
