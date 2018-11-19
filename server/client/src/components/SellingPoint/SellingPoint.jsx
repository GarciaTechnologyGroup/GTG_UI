import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  headline: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

const SellingPoint = ({ icon, headline, description }) => (
  <div className="c-selling-point__wrapper">
    <div className="c-selling-point__icon">
      <i className={`iconfont icon-${icon}`} />
    </div>
    <div className="c-selling-point__headline">
      <h1>{headline}</h1>
    </div>
    <div className="c-selling-point__description">
      {description}
    </div>
  </div>
);

SellingPoint.propTypes = propTypes;
export default SellingPoint;
