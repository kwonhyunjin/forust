import React from 'react';
import Participation from '../../svgs/icon-chat.svg';
import Solved from '../../svgs/icon-check-circle.svg';
import Unsolved from '../../svgs/icon-close-circle.svg';
import Help from '../../svgs/icon-help-circle.svg';

export default function AppNav() {
  return (
    <nav className="app-nav" aria-labelledby="app-nav-heading">
      <h2 className="blind" id="app-nav-heading">Main menu</h2>
      <ul className="app-nav__list">
        <li className="app-nav__item">
          <a href="/forum-list" className="app-nav__link is-active" aria-current="page">
            <Help className="app-nav__img" />
            All Questions
          </a>
        </li>
        <li className="app-nav__item">
          <a href="/forum-list" className="app-nav__link">
            <Participation className="app-nav__img" />
            My Participation
          </a>
        </li>
        <li className="app-nav__item">
          <a href="/forum-list" className="app-nav__link">
            <Unsolved className="app-nav__img" />
            Unsolved
          </a>
        </li>
        <li className="app-nav__item">
          <a href="/forum-list" className="app-nav__link">
            <Solved className="app-nav__img" />
            Solved
          </a>
        </li>
      </ul>
    </nav>
  );
}
