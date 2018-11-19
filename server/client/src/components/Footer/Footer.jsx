import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CircleLogo from '../basic/CircleLogo';
import './styles.less';

const propTypes = {
  hasLogo: PropTypes.bool,
};

const defaultProps = {
  hasLogo: true,
};

const Footer = ({ hasLogo }) => (
  <footer className="c-footer__container">
    <CircleLogo hasLogo={hasLogo} />
    <div className="c-footer__copy-privacy-cell">
      <span className="c-footer__copyright">2018</span>
      <Link className="c-footer__privacy-link" to="/privacy-policy">Privacy Policy</Link>
    </div>
    <div className="c-footer__social-cell">
      <a target="_blank" href="https://twitter.com/GarciaTechGroup">
        <div className="c-footer__icon c-footer__icon--twitter">
          <i className="iconfont icon-twitter" />
        </div>
      </a>
      <a target="_blank" href="https://www.facebook.com/GarciaTechGroup/">
        <div className="c-footer__icon c-footer__icon--facebook">
          <i className="iconfont icon-facebook" />
        </div>
      </a>
      <a target="_blank" href="https://www.instagram.com/garcia.technology.group/">
        <div className="c-footer__icon c-footer__icon--instagram">
          <i className="iconfont icon-instagram1" />
        </div>
      </a>
    </div>
  </footer>
);

Footer.propTypes = propTypes;
Footer.defaultProps = defaultProps;
export default Footer;
