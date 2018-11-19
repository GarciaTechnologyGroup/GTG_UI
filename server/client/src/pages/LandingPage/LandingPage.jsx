import React from 'react';
import HeroBanner from '../../components/HeroBanner';
import Billboard from '../../components/Billboard';
import Lineup from '../../components/Lineup';
import LandingContact from '../../components/LandingContact';
import './styles.less';

function LandingPage() {
  return (
    <div className="c-landing-page__container">
      <div className="c-landing-page__hero-banner">
        <HeroBanner
          boldTitleLead
          boldTitle="Discover"
          primaryTitle="Your Career"
          secondaryTitle="Then Explore Our Clients Solutions"
          modifierClassname="--landing-page"
          isLanding
        />
      </div>
      <div className="c-landing-page__lineup">
        <Lineup />
      </div>
      <div className="c-landing-page__billboard">
        <Billboard />
      </div>
      <div className="c-landing-page__contact">
        <LandingContact />
      </div>
    </div>
  );
}

export default LandingPage;
