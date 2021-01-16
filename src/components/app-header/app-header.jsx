import AppLogo from '@/components/app-logo/app-logo';
import Dropdown from '@/components/dropdown/dropdown';
import Icon from '@/components/icon/icon';
import firebase from '@/firebase/index';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

export default function AppHeader() {
  const router = useRouter();
  const [loggedin, setLoggedIn] = useState(firebase.auth().currentUser != null);

  const handleLogout = async () => {
    await firebase.auth().signOut();
    router.push('/forum/list');
  };

  const { currentUser } = firebase.auth();

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setLoggedIn(user != null);
    });
  }, []);

  return (
    <>
      <header className="app-header">
        <div className="app-header__wrapper container">
          <AppLogo />
          <form className="app-search">
            <Icon type="magnify" className="app-search__icon" aria-hidden="true" />
            <input className="app-search__field" type="search" placeholder="Type to Search" aria-label="Search" />
          </form>
          <button type="button" className="app-inbox" aria-label="Inbox">
            <Icon type="bell-outline" className="app-inbox__icon" aria-hidden="true" />
          </button>
          {!loggedin
            ? (
              <>
                <Link href="/login">
                  <a className="app-auth">Login</a>
                </Link>
                <Link href="/signup">
                  <a className="app-auth">Signup</a>
                </Link>
              </>
            )
            : (
              <Dropdown
                className="app-profile-dropdown"
                toggle={(
                  <button className="app-profile">
                    <div className="app-profile__avatar" aria-hidden="true">
                      <img src="/images/avatar-sample.jpeg" className="app-profile__avatar-img" alt="" />
                    </div>
                    <span className="app-profile__name">{currentUser.displayName}</span>
                    <Icon type="caret-down" className="app-profile__icon" aria-hidden="true" />
                  </button>
                )}
              >
                <Dropdown.Menuitem>Settings</Dropdown.Menuitem>
                <Dropdown.Menuitem onClick={handleLogout}>Logout</Dropdown.Menuitem>
              </Dropdown>
            )}
        </div>
      </header>
    </>
  );
}
