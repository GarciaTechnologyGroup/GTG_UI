import React from 'react';
import sellingPoints from './sellingPoints';
import SellingPoint from '../SellingPoint';
import './styles.less';


const renderSellingPoints = dataCluster => dataCluster.map(singleBlock => (
  <div
    className="c-lineup__selling-point"
    key={singleBlock.icon}
  >
    <SellingPoint
      headline={singleBlock.headline}
      icon={singleBlock.icon}
      description={singleBlock.description}
    />
  </div>
));

const Lineup = () => (
  <div className="c-lineup__wrapper">
    <div className="c-lineup__shell">
      {renderSellingPoints(sellingPoints)}
    </div>
  </div>
);

export default Lineup;
