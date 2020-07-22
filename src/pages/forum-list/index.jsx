import DefaultLayout from '@/layouts/default-layout/default-layout';
import React from 'react';

export default function ForumList() {
  return (
    <>
      <DefaultLayout>
        <h2 className="visually-hidden">More issue exchange communities</h2>
        <div className="forum-list">
          <div className="question-summary">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="question-summary">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
          <div className="question-summary">
            <ul>
              <li>test</li>
              <li>test</li>
              <li>test</li>
              <li>test</li>
            </ul>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
