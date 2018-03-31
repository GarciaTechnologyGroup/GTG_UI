import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const { string, oneOfType, node, func } = PropTypes;
const propTypes = {
  className: string,
  label: oneOfType([string, node]).isRequired,
  onClick: func,
};

const defaultProps = {
  className: '',
};

const classNameProvider = (className) => `c-button__original ${className !== undefined ? className : ''}`;

function Button(props) {
  return (
    <button
      className={classNameProvider(props.className)}
      onClick={props.onClick}
      onKeyDown={props.onClick}
    >{props.label}</button>
  );
}

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;
