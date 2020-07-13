import React from 'react';

export default function AuthLayout() {
  return (
    <div className="auth-layout">
      <h2 className="visually-hidden">Join the community And solve the issue.</h2>
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
  );
}
