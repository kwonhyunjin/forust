import PropTypes from 'prop-types';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <div className="auth-layout">
      <div className="auth-header">
        <div className="auth-logo">
          <a href="/">
            <img src="/logo.svg" alt="Home" />
          </a>
        </div>
        <div className="auth-desc">
          <div className="auth-desc__title">
            <p>
              Join the community
              <br />
              And solve the issue.
            </p>
          </div>
          <div className="auth-desc__contents">
            <ul className="auth-desc__ul">
              <li>•  Get unstuck — ask a question</li>
              <li>•  Unlock new privileges like voting and commenting</li>
              <li>•  Save your favorite tags, filters, and jobs</li>
              <li>•  Earn reputation and badges</li>
            </ul>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.node,
};
