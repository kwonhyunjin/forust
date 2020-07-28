import React from 'react';
import LogoSymbol from '../../svgs/logo-symbol.svg';

export default function AppLogo() {
  return (
    <a href="/" className="app-logo">
      <LogoSymbol className="app-logo__link" />
    </a>
  );
}
