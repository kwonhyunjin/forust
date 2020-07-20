import React from 'react';

export default function Header() {
  return (
    <>
      <header className="header">
        <div className="header-wrapper">
          <a href="/" className="header-item header-logo">
            <img src="/images/logo-symbol.svg" alt="Home" className="header-logo__img" />
          </a>
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
                <li className="profile-dropdown__items">Your Profile</li>
                <li className="profile-dropdown__items">Your Question</li>
                <hr />
                <li className="profile-dropdown__items">Sign out</li>
              </ul>
            </details>
          </div>
        </div>
      </header>
    </>
  );
}
