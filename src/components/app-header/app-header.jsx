import AppLogo from '@/components/app-logo/app-logo';
import Dropdown from '@/components/dropdown/dropdown';
import Icon from '@/components/icon/icon';
import React from 'react';

export default function AppHeader() {
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
          <Dropdown
            toggle={(
              <button className="app-profile">
                <div className="app-profile__avatar">
                  <img src="/images/avatar-sample.jpeg" className="app-profile__avatar-img" alt="" aria-hidden="true" />
                </div>
                <span className="app-profile__name">Chamdori</span>
                <Icon type="caret-down" className="app-profile__icon" aria-hidden="true" />
              </button>
            )}
          >
            <Dropdown.Menuitem>Settings</Dropdown.Menuitem>
            <Dropdown.Menuitem>Logout</Dropdown.Menuitem>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
