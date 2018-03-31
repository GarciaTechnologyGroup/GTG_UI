import React from 'react';
import HeroBanner from 'src/components/HeroBanner';
import Carousel from 'src/components/Carousel';
import bios from './bios';
import { description } from './about-us-content';
import './styles.less';

function AboutPage() {
  return (
    <div>
      <HeroBanner
        primaryTitle="We will provide you with our best"
        secondaryTitle="Because we want you to be your best"
        modifierClassname="--about-page"
        isLanding={false}
        renderEdges={false}
      />
      <div className="c-about-page__description-container">
        <div className="c-about-page__description">
          {description}
        </div>
      </div>
      <div className="c-about-page__carousel-container">
        <div className="c-about-page__carousel-title">
          <h1>Who we are</h1>
        </div>
        <Carousel bios={bios} />
      </div>
    </div>
  );
}


export default AboutPage;
