import React from 'react';
import './styles.less';
function LandingContact() {
  return (
    <div className="c-landing-contact__wrapper">
      <div className="c-landing-contact__cell">
        <div className="c-landing-contact__header">
          GET IN TOUCH WITH US!
        </div>
        <div className="c-landing-contact__content-container">
          <div className="c-landing-contact__icon-info-cell">
            <div className="c-landing-contact__icon">
              <i className="iconfont icon-email"></i>
            </div>
            <div className="c-landing-contact__contact-box">
              Email: contact@garcia.technology
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingContact;
