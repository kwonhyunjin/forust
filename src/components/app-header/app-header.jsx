import AppLogo from '@/components/app-logo/app-logo';
import DropDown from '@/components/drop-down/drop-down';
import React from 'react';
import Inbox from '../../svgs/icon-bell-outline.svg';
import Search from '../../svgs/icon-magniify.svg';

export default function AppHeader() {
  return (
    <>
      <header className="app-header">
        <div className="app-header-wrapper">
          <AppLogo />
          <div className="app-header-container">
            <form className="app-search">
              <Search className="app-search__img" alt="" aria-hidden="true" />
              <input className="app-search__field" type="search" placeholder="Type to Search" aria-label="Search" />
            </form>
            <a href="/" className="app-inbox" aria-label="Inbox">
              <Inbox className="app-inbox__img" alt="" aria-hidden="true" />
            </a>
            <DropDown />
          </div>
        </div>
      </header>
    </>
  );
}
