import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const { string, bool } = PropTypes;
const propTypes = {
  renderEdges: bool,
  boldTitleLead: bool,
  boldTitle: string,
  primaryTitle: string,
  secondaryTitle: string,
  modifierClassname: string.isRequired,
  isLanding: bool,
};

const defaultProps = {
  boldTitleLead: false,
  boldTitle: '',
  primaryTitle: '',
  secondaryTitle: '',
  renderEdges: true,
  isLanding: false,
};

function HeroBanner(props) {
  const { boldTitleLead, boldTitle, primaryTitle, secondaryTitle, modifierClassname, renderEdges, isLanding } = props;
  return (
    <div
      className={
      `${isLanding ? '' : 'c-hero-banner__shell--alternate-page'}
      c-hero-banner__shell c-hero-banner__shell${modifierClassname}
      `}
    >
      <div className="c-hero-banner__range">
        <div className="c-hero-banner__cell">
          <div className={`c-hero-banner__jumbotron c-hero-banner__font-color${modifierClassname}`}>
            {boldTitleLead && <span className="c-hero-banner__big-fat-font">{boldTitle}&nbsp;</span>}
            <span className="c-hero-banner__big-skinny-font">{primaryTitle}</span>
            {renderEdges && (<div>
              <span className="c-hero-banner__edge c-hero-banner__edge--top-left" />
              <span className="c-hero-banner__edge c-hero-banner__edge--top-right" />
              <span className="c-hero-banner__edge c-hero-banner__edge--bottom-left" />
              <span className="c-hero-banner__edge c-hero-banner__edge--bottom-right" />
            </div>)}
          </div>
          <div className={`c-hero-banner__jumbo-subtext-container c-hero-banner__jumbo-subtext-container${modifierClassname}`}>
            <span>{secondaryTitle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

HeroBanner.propTypes = propTypes;
HeroBanner.defaultProps = defaultProps;
export default HeroBanner;

/*
THIS MIGHT BE USED LATER:

<div className="c-hero-banner__jumbo-subtext">
  <p>We focus on your technological hurdles, obstacles and problems from every angle our knowledge and industry experience provides us in order to provide the absolute best solution for your business&#39; needs.</p>
</div>

*/
