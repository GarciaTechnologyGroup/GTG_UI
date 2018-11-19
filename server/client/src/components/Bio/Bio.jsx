import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Bio = (props) => {
  return (
    <div
      className="c-bio__single-slide"
      key={props.name}
    >
      <img
        className="c-bio__photo"
        src={props.photo}
        alt={`${props.name}`}
      />
      <div className="c-bio__bio">
        <props.bio />
      </div>
      <div className="c-bio__icon-divider" />
      <div className="c-bio__name-title">
        <div className="c-bio__name">
          <h1>{props.name}</h1>
        </div>
        <div className="c-bio__title">
          <p>{props.title}</p>
        </div>
      </div>
    </div>
  );
};

Bio.propTypes = propTypes;
export default Bio;
