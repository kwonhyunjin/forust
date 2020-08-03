import React from 'react';
import LogoSymbol from '../../svgs/logo-symbol.svg';

export default function AppLogo() {
  return (
    <h1 className="app-logo">
      <a href="/" className="app-logo__link">
        <LogoSymbol className="app-logo__img" />
      </a>
      <p className="blind">Forust</p>
    </h1>
  );
}
