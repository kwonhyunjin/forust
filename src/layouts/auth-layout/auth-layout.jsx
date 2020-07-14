import PropTypes from 'prop-types';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <a href="/" className="auth-logo">
          <img src="/images/logo.svg" alt="Home" className="auth-logo__img" />
        </a>
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
