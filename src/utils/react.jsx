import PropTypes from 'prop-types';
import React from 'react';

export const TIMESTAMP_PROP_TYPES = PropTypes.shape({
  seconds: PropTypes.number,
  nanoseconds: PropTypes.number,
});

export function isRenderable(node) {
  return React.Children
    .toArray(node)
    .filter((item) => item === 0 || !!item)
    .length > 0;
}
