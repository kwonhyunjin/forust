import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

const icons = {};

try {
  (async () => {
    const iconsContext = require.context('svg-inline-loader!@/icons', true, /\.svg$/, 'eager');
    const iconKeys = iconsContext.keys();
    const iconValues = await Promise.all(iconKeys.map(iconsContext));
    iconValues.forEach((icon, index) => { icons[iconKeys[index]] = icon; });
  })();
} catch (e) { console.error(e); }

export default function Icon({ className, type, ...rest }) {
  return (
    // eslint-disable-next-line react/no-danger
    <i {...rest} className={classNames('icon', className)} dangerouslySetInnerHTML={{ __html: icons[`./${type}.svg`] }} />
  );
}

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
};
