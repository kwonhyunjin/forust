import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

function CardListHeaderHeading({
  children, className, level = 2, size = 2, ...rest
}) {
  const Heading = `h${level}`;
  const headingClassName = `heading${size}`;

  return (
    <Heading {...rest} className={classNames('card-list-header__heading', headingClassName, className)}>{children}</Heading>
  );
}

CardListHeaderHeading.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  level: PropTypes.string,
  size: PropTypes.string,
};

function CardListHeaderActions({ children, className, ...rest }) {
  return (
    <div {...rest} className={classNames('card-list-header__actions', className)}>{children}</div>
  );
}

CardListHeaderActions.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

function CardListHeader({ children, className, ...rest }) {
  return (
    <div {...rest} className={classNames('card-list-header', className)}>
      {children}
    </div>
  );
}

CardListHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

CardListHeaderHeading.displayName = 'CardListHeader.Heading';
CardListHeaderActions.displayName = 'CardListHeader.Actions';

CardListHeader.Heading = CardListHeaderHeading;
CardListHeader.Actions = CardListHeaderActions;

export default CardListHeader;
