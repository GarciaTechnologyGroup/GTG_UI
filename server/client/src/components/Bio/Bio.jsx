import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  name: PropTypes.string.isRequired,
  photo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

const Bio = ({ name, photo, bio, title }) => (
  <div
    className="c-bio__single-slide"
    key={name}
  >
    <img
      className="c-bio__photo"
      src={photo}
      alt={`${name}`}
    />
    <div className="c-bio__bio">
      <bio />
    </div>
    <div className="c-bio__icon-divider" />
    <div className="c-bio__name-title">
      <div className="c-bio__name">
        <h1>{name}</h1>
      </div>
      <div className="c-bio__title">
        <p>{title}</p>
      </div>
    </div>
  </div>
);

Bio.propTypes = propTypes;
export default Bio;
