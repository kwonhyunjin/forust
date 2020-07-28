import React from 'react';
import IconCaretDown from '../../svgs/icon-caret-down.svg';

export default function DropDown() {
  return (
    <details className="app-profile">
      <summary className="app-user">
        <div className="app-user__img">
          <img className="app-user__img--item" src="/images/avatar-sample.jpeg" alt="" aria-hidden="true" />
        </div>
        <p className="app-user__name">Chamdori</p>
        <IconCaretDown className="app-user__icon" alt="" aria-hidden="true" />
      </summary>
      {/* @todo dropdown style */}
    </details>
  );
}
