import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const { string, oneOfType, node, func } = PropTypes;
const propTypes = {
  className: string,
  children: oneOfType([string, node]).isRequired,
  onClick: func,
};

const defaultProps = {
  className: '',
};

const classNameProvider = (className) => `c-inivisible-button__invisible ${className !== undefined ? className : ''}`;

function InvisibleButton(props) {
  return (
    <button className={classNameProvider(props.className)} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

InvisibleButton.propTypes = propTypes;
InvisibleButton.defaultProps = defaultProps;
export default InvisibleButton;
