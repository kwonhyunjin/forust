import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function HeadingItem({
  children, className, level = 2, size = 2,
}) {
  const HeadingLevel = `h${level}`;
  const headingSize = `heading${size}`;

  return (
    <HeadingLevel className={classNames('', className, headingSize)} level={level}>{children}</HeadingLevel>
  );
}

HeadingItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.string,
  size: PropTypes.string,
};

function HeadingActions({ children }) {
  return (
    <>{children}</>
  );
}

HeadingActions.propTypes = {
  children: PropTypes.node,
};

function CardListHeader({ children, className }) {
  return (
    <div className={classNames('card-list-header', className)}>
      {children}
    </div>
  );
}

CardListHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardListHeader.Heading = HeadingItem;
CardListHeader.Actions = HeadingActions;

export default CardListHeader;
