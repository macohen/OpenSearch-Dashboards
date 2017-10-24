import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const sizeToClassNameMap = {
  small: 'euiLoadingSpinner--small',
  medium: 'euiLoadingSpinner--medium',
  large: 'euiLoadingSpinner--large',
  xLarge: 'euiLoadingSpinner--xLarge',
};

export const SIZES = Object.keys(sizeToClassNameMap);

export const EuiLoadingSpinner = ({ children, size, className, ...rest }) => {
  const classes = classNames(
    'euiLoadingSpinner',
    sizeToClassNameMap[size],
    className
  );

  return (
    <div
      className={classes}
      {...rest}
    >
      {children}
    </div>
  );
};

EuiLoadingSpinner.propTypes = {
  size: PropTypes.oneOf(SIZES),
};
