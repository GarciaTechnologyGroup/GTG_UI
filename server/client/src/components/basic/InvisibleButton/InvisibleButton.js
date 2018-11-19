import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const { string, oneOfType, node, func } = PropTypes;
const propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func.isRequired,
};

const defaultProps = {
  className: '',
};

const classNameProvider = className => `c-inivisible-button__invisible ${className !== undefined ? className : ''}`;

const InvisibleButton = ({ children, className, onClick }) => (
  <button
    className={classNameProvider(className)}
    onClick={onClick}
  >
    {children}
  </button>
);

InvisibleButton.propTypes = propTypes;
InvisibleButton.defaultProps = defaultProps;
export default InvisibleButton;
