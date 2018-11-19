import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const {
  string,
  oneOfType,
  node,
  func,
} = PropTypes;

const propTypes = {
  className: string,
  label: oneOfType([string, node]).isRequired,
  onClick: func.isRequired,
};

const defaultProps = {
  className: '',
};

const classNameProvider = className => `c-button__original ${className !== undefined ? className : ''}`;

const Button = ({ className, onClick, label }) => (
  <button
    className={classNameProvider(className)}
    onClick={onClick}
    onKeyDown={onClick}
  >
    {label}
  </button>
);

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
