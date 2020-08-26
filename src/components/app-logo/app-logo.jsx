import Link from 'next/link';
import React from 'react';
import LogoSymbol from '../../svgs/logo-symbol.svg';

export default function AppLogo() {
  return (
    <Link href="/">
      <a className="app-logo">
        <h1 className="app-logo__heading">
          <LogoSymbol className="app-logo__icon" />
          <span className="blind">Forust</span>
        </h1>
      </a>
    </Link>
  );
}
