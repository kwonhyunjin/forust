import AppLogo from '@/components/app-logo/app-logo';
import Dropdown from '@/components/dropdown/dropdown';
import Icon from '@/components/icon/icon';
import React from 'react';

export default function AppHeader() {
  return (
    <>
      <header className="app-header">
        <div className="app-header__wrapper">
          <AppLogo />
          <form className="app-search">
            <Icon type="magniify" className="app-search__icon" aria-hidden="true" />
            <input className="app-search__field" type="search" placeholder="Type to Search" aria-label="Search" />
          </form>
          <button type="button" className="app-inbox" aria-label="Inbox">
            <Icon type="bell-outline" className="app-inbox__icon" aria-hidden="true" />
          </button>
          <Dropdown toggle={<button>test</button>}>
            <Dropdown.Menuitem>hihi</Dropdown.Menuitem>
          </Dropdown>
        </div>
      </header>
    </>
  );
}
