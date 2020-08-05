import Link from 'next/link';
import PropTypes from 'prop-types';
import React from 'react';
import Logo from '../../svgs/logo.svg';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <Link href="/">
          <a className="auth-logo">
            <Logo className="auth-logo__icon" />
          </a>
        </Link>
        <p className="auth-greeting">
          Join the community
          <br />
          And solve the issue.
        </p>
        <ul className="auth-benefits">
          <li className="auth-benefits__item">•  Get unstuck — ask a question</li>
          <li className="auth-benefits__item">•  Unlock new privileges like voting and commenting</li>
          <li className="auth-benefits__item">•  Save your favorite tags, filters, and jobs</li>
          <li className="auth-benefits__item">•  Earn reputation and badges</li>
        </ul>
      </div>
      <div className="auth-container">
        {children}
      </div>
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
