import Link from 'next/link';
import React from 'react';
import LogoSymbol from '../../svgs/logo-symbol.svg';

export default function AppLogo() {
  return (
    <h1 className="app-logo">
      <Link href="/">
        <a className="app-logo__link">
          <LogoSymbol className="app-logo__icon" />
        </a>
      </Link>
      <p className="blind">Forust</p>
    </h1>
  );
}
