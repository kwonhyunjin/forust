import AppLogo from '@/components/app-logo/app-logo';
import DropDown from '@/components/dropdown/dropdown';
import Icon from '@/components/icon/icon';
import React from 'react';

export default function AppHeader() {
  return (
    <>
      <header className="app-header">
        <div className="app-header__wrapper">
          <AppLogo />
          <form className="app-search">
            <Icon type="magniify" className="app-search__img" aria-hidden="true" />
            <input className="app-search__field" type="search" placeholder="Type to Search" aria-label="Search" />
          </form>
          <button type="button" className="app-inbox" aria-label="Inbox">
            <Icon type="bell-outline" className="app-inbox__img" aria-hidden="true" />
          </button>
          <DropDown />
        </div>
      </header>
    </>
  );
}
