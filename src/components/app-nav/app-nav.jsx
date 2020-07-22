import React from 'react';

export default function AppNav() {
  return (
    <>
      <nav className="app-nav" id="nav-heading">
        <h2 className="visually-hidden">Your Commutiny</h2>
        <ul className="nav-menu" role="listbox" aria-label="nav-heading" aria-activedescendant="help" tabIndex="0">
          <li className="nav-menu__items" role="option" aria-selected="true" id="help">
            <a href="/forum-list" className="nav-menu__link">
              <img src="/images/navigation-help.svg" alt="All Question" className="nav-menu__img" />
              All Questions
            </a>
          </li>
          <li className="nav-menu__items" role="option" aria-selected="false">
            <a href="/forum-list" className="nav-menu__link">
              <img src="/images/navigation-participation.svg" alt="My Participation" className="nav-menu__img" />
              My Participation
            </a>
          </li>
          <li className="nav-menu__items" role="option" aria-selected="false">
            <a href="/forum-list" className="nav-menu__link">
              <img src="/images/navigation-unsolved.svg" alt="Unsolved" className="nav-menu__img" />
              Unsolved
            </a>
          </li>
          <li className="nav-menu__items" role="option" aria-selected="false">
            <a href="/forum-list" className="nav-menu__link">
              <img src="/images/navigation-solved.svg" alt="Solved" className="nav-menu__img" />
              Solved
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
