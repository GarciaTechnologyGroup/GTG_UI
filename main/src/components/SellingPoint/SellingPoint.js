import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

function SellingPoint(props) {
  return (
    <div className="c-selling-point__wrapper">
      <div className="c-selling-point__icon">
        <i className={`iconfont icon-${props.icon}`}></i>
      </div>
      <div className="c-selling-point__headline">
        <h1>{props.headline}</h1>
      </div>
      <div className="c-selling-point__description">
        {props.description}
      </div>
    </div>
  );
}

SellingPoint.propTypes = propTypes;
export default SellingPoint;
