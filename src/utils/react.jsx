import PropTypes from 'prop-types';

export const TIMESTAMP_PROP_TYPES = PropTypes.shape({
  seconds: PropTypes.number,
  nanoseconds: PropTypes.number,
});
