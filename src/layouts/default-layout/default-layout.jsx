import AppHeader from '@/components/app-header/app-header';
import AppNav from '@/components/app-nav/app-nav';
import PropTypes from 'prop-types';
import React from 'react';

export default function DefaultLayout({ children }) {
  return (
    <>
      <div className="app-layout container">
        <AppHeader />
        <div className="app-container">
          <AppNav />
          <div className="app-index">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.node,
};
