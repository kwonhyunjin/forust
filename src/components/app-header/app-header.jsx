import React from 'react';

export default function AppHeader() {
  return (
    <>
      <header className="app-header">
        <div className="header-wrapper">
          <h1 className="header-item app-logo">
            <a href="/" className="app-logo__link">
              <img src="/images/logo-symbol.svg" alt="Home" className="app-logo__img" />
            </a>
            <p className="visually-hidden">FORUST</p>
          </h1>
          <div className="header-item header-container">
            <form className="header-item header-search">
              <input className="header-search__field" type="text" placeholder="Type to search" />
              <img src="/images/search.svg" alt="Search" className="header-search__img" />
            </form>
            <a href="/" className="header-item header-notice">
              <img src="/images/header-bell.svg" alt="Notice" className="header-notice__img" />
            </a>
            <details className="header-item header-profile">
              <summary className="profile-overlay" aria-label="View profile and more">
                <img src="/images/chamdori.jpeg" alt="Profile" className="header-profile__img" />
                <span className="header-profile__user">
                  Chamdori
                  <img src="/images/profile-dropdown.svg" alt="Profile-Dropdown" className="header-profile__dropdown-icon" />
                </span>
              </summary>
              <ul className="profile-dropdown">
                <li className="profile-dropdown__item">Your Profile</li>
                <li className="profile-dropdown__item">Your Question</li>
                <hr />
                <li className="profile-dropdown__item">Sign out</li>
              </ul>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
