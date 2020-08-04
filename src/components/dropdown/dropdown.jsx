import Icon from '@/components/icon/icon';
import React from 'react';

export default function DropDown() {
  return (
    <details className="app-profile">
      <summary className="app-user">
        <div className="app-user__img">
          <img className="app-user__img--item" src="/images/avatar-sample.jpeg" alt="" aria-hidden="true" />
        </div>
        <p className="app-user__name">AAAAAAAAAAAAAAAA</p>
        <Icon type="caret-down" className="app-user__icon" aria-hidden="true" />
      </summary>
      {/* @todo dropdown style */}
    </details>
  );
}
