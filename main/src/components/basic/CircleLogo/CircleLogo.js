import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/images/garcia_G_3d.png';
import './styles.less';

const propTypes = {
  hasLogo: PropTypes.bool,
};

const defaultProps = {
  hasLogo: false,
};

function logoClassModifier(bool, original) {
  if (bool) return `c-circle-logo__${original}`;
  return `c-circle-logo__${original}--noLogo`;
}

function CircleLogo({ hasLogo }) {
  return (
    <div className={logoClassModifier(hasLogo, 'container')}>
      {hasLogo &&
      <div className={logoClassModifier(hasLogo, 'icon-background')}>
        <img className={logoClassModifier(hasLogo, 'icon')} src={logo} alt="Garcia Technology Group Icon" />
      </div>}
      <div className={logoClassModifier(hasLogo, 'brand-title')}>
        <Link to="/">
          <h1>Garcia Technology Group</h1>
        </Link>
      </div>
    </div>
  );
}

CircleLogo.propTypes = propTypes;
CircleLogo.defaultProps = defaultProps;
export default CircleLogo;
