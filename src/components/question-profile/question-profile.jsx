import React from 'react';

export default function QuestionProfile() {
  return (
    <div className="question-profile">
      <a href="/" className="question-profile__link">
        <img src="/images/avatar-sample.jpeg" className="question-profile__img" alt="" aria-hidden="true" />
      </a>
      <ul className="profile-list">
        <li className="profile-list__user"><a href="/" className="profile-list__link">Chamdori</a></li>
        <li className="profile-list__date">4 days ago</li>
      </ul>
    </div>
  );
}
