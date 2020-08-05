import Icon from '@/components/icon/icon';
import Link from 'next/link';
import React from 'react';

export default function AppNav() {
  return (
    <nav className="app-nav" aria-labelledby="app-nav-heading">
      <h2 className="blind" id="app-nav-heading">Main menu</h2>
      <ul className="app-nav__list">
        <li className="app-nav__item">
          <Link href="/all-question">
            <a className="app-nav__link is-active" aria-current="page">
              <Icon type="help-circle" className="app-nav__icon" aria-hidden="true" />
              All Questions
            </a>
          </Link>
        </li>
        <li className="app-nav__item">
          <Link href="/my-participation">
            <a className="app-nav__link">
              <Icon type="chat" className="app-nav__icon" aria-hidden="true" />
              My Participation
            </a>
          </Link>
        </li>
        <li className="app-nav__item">
          <Link href="/unsolved">
            <a className="app-nav__link">
              <Icon type="close-circle" className="app-nav__icon" aria-hidden="true" />
              Unsolved
            </a>
          </Link>
        </li>
        <li className="app-nav__item">
          <Link href="/solved">
            <a className="app-nav__link">
              <Icon type="check-circle" className="app-nav__icon" aria-hidden="true" />
              Solved
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
