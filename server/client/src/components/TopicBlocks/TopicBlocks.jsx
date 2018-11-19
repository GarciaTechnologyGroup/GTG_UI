import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const { string, node } = PropTypes;
const propTypes = {
  title: string,
  modifierClass: string,
  firstBlock: node,
  secondBlock: node,
  thirdBlock: node,
  className: string,
};

const TopicBlocks = ({ modifierClass, title, firstBlock, secondBlock, thirdBlock, className }) => (
  <div className={`c-topic__topic-cell c-topic__topic-cell--${className}`}>
    <div className="c-topic__title-cell">
      <span className={`c-topic__title-content c-topic__title-content--${modifierClass}`}>
        {title}
      </span>
    </div>
    <div className="c-topic__topic-content">
      <div className="c-topic__block c-topic__block--first">
        {firstBlock}
      </div>
      <div className="c-topic__block c-topic__block--second">
        {secondBlock}
      </div>
      <div className="c-topic__block c-topic__block--third">
        {thirdBlock}
      </div>
    </div>
  </div>
);

TopicBlocks.propTypes = propTypes;
export default TopicBlocks;
