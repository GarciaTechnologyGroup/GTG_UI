import React from 'react';
import './styles.less';

function Billboard() {
  return (
    <div className="c-billboard__wrapper">
      <div className="c-billboard__half c-billboard__half--left">
        <div className="c-billboard__billboard-container">
          <div className="c-billboard__title">
            <p>Solution Driven</p>
          </div>
          <div className="c-billboard__content">
            <p>The foundation of our success has been established in understanding the specific needs of each client. We pride ourselves on knowing and utilizing the best practices in the industry, while also being flexible enough to innovate our own practical approaches in finding the best solution for each of our customers.</p>
          </div>
        </div>
      </div>
      <div className="c-billboard__half c-billboard__half--right">
        <div className="c-billboard__billboard-container">
          <div className="c-billboard__title">
            <p>Motivated Technologists</p>
          </div>
          <div className="c-billboard__content">
            <p>Our team is continually striving to discover new technological solutions and bleeding edge technology that can put our clients ahead of the competition. Whether this means proficient web developers or data engineers, our company&#39;s culture has your company&#39;s future in mind.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Billboard;
