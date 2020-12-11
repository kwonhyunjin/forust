import PropTypes from 'prop-types';

export const TIMESTAMP_PROP_TYPES = PropTypes.shape({
  seconds: PropTypes.number,
  nanoseconds: PropTypes.number,
});

export function isRenderable(node) {
  if (node === 0) { return true; }
  if (typeof node === 'boolean') { return false; }
  return !!node;
}
