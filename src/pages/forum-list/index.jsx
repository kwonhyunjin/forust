import DefaultLayout from '@/layouts/default-layout/default-layout';
import React, { useReducer } from 'react';

export default function ForumList() {
  function reducer(state, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { value: state.value + 1 };
      case 'DECREMENT':
        return { value: state.value - 1 };
      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <>
      <DefaultLayout>
        <h2 className="visually-hidden">More issue exchange communities</h2>
        <div className="forum-list">
          <div className="question-summary">
            <div className="question-recommendation">
              <button type="button" className="recommendation-button recommendation-button__up" aria-label="Up" onClick={() => dispatch({ type: 'INCREMENT' })} />
              <p className="recommendation-number">{state.value}</p>
              <button type="button" className="recommendation-button recommendation-button__down" aria-label="Down" onClick={() => dispatch({ type: 'DECREMENT' })} />
            </div>
            <div className="question-content">
              <a href="/forum-list" className="question-title">Lorem ipsum dolor sit amet.</a>
              <div className="question-subject">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="question-tags">
                <a href="forum-list" className="question-tags__item">next.js</a>
                <a href="forum-list" className="question-tags__item">react</a>
                <a href="forum-list" className="question-tags__item">javascript</a>
              </div>
              <div className="question-profile">
                <div className="grid-row">
                  <a href="forum-list" className="question-user"><img src="/images/chamdori.jpeg" alt="Profile" className="question-user__img" /></a>
                  <div className="question-info">
                    <a href="forum-list" className="question-info__user">Chamdori</a>
                    <span className="question-info__date">4 days ago</span>
                  </div>
                </div>
                <div className="grid-row">
                  <div className="question-view grid-row">
                    <img src="/images/question-view.svg" alt="Question View" className="question-view__img" />
                    <span className="question-view__number">9,813</span>
                  </div>
                  <div className="question-comment grid-row">
                    <img src="/images/question-comment.svg" alt="Question Comment" className="question-comment__img" />
                    <span className="question-comment__number">319</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="question-summary">
            <div className="question-recommendation">
              <button type="button" className="recommendation-button recommendation-button__up" aria-label="Up" onClick={() => dispatch({ type: 'INCREMENT' })} />
              <p className="recommendation-number">{state.value}</p>
              <button type="button" className="recommendation-button recommendation-button__down" aria-label="Down" onClick={() => dispatch({ type: 'DECREMENT' })} />
            </div>
            <div className="question-content">
              <a href="forum-list" className="question-title">Lorem ipsum dolor sit amet.</a>
              <div className="question-subject">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </div>
              <div className="question-tags">
                <a href="forum-list" className="question-tags__item">recoil</a>
                <a href="forum-list" className="question-tags__item">redux</a>
                <a href="forum-list" className="question-tags__item">mobx</a>
              </div>
              <div className="question-profile">
                <div className="grid-row">
                  <a href="forum-list" className="question-user"><img src="/images/chamdori.jpeg" alt="Profile" className="question-user__img" /></a>
                  <div className="question-info">
                    <a href="forum-list" className="question-info__user">Chamdori</a>
                    <span className="question-info__date">4 days ago</span>
                  </div>
                </div>
                <div className="grid-row">
                  <div className="question-view grid-row">
                    <img src="/images/question-view.svg" alt="Question View" className="question-view__img" />
                    <span className="question-view__number">9,813</span>
                  </div>
                  <div className="question-comment grid-row">
                    <img src="/images/question-comment.svg" alt="Question Comment" className="question-comment__img" />
                    <span className="question-comment__number">319</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
}
