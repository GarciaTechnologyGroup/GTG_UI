import React from 'react';
import Button from 'src/components/basic/Button';
import HeroBanner from 'src/components/HeroBanner';
import devSkills from './devSkills';
import sqlSkills from './sqlSkills';
import './styles.less';

class TrainingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      devSelect: true,
    };
    this.selectDevelopment = this.selectDevelopment.bind(this);
    this.selectDataScience = this.selectDataScience.bind(this);
  }

  selectDevelopment() {
    this.setState({
      devSelect: true,
    });
  }

  selectDataScience() {
    this.setState({
      devSelect: false,
    });
  }

  renderSkills(skillSet) {
    return (
      <ul className="c-training-page__skill-list">
        {skillSet.map((skill) => (
          <li key={`${skill.access}${skill.title}`} className="c-training-page__skill-cell">
            <div className="c-training-page__skill-inner">
              <div className="c-training-page__skill-logo-cell">
                <img className="c-training-page__skill-logo" src={skill.logo} alt={skill.access} />
              </div>
              <div className="c-training-page__skill-details">
                <div className="c-training-page__skill-title">
                  {skill.title}
                </div>
                <div className="c-training-page__skill-blurb">
                  {skill.blurb}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="c-training-page__container">
        <HeroBanner
          primaryTitle="Start your new career"
          secondaryTitle="Acquire the most in-demand professional skills"
          modifierClassname="--training-page"
          renderEdges={false}
        />
        <div className="c-training-page__skills">
          <div className="c-training-page__skill-toggle-container">
            <ul className="c-training-page__skill-toggle-list">
              <li>
                <Button
                  className={`c-training-page__button ${this.state.devSelect ?
                    null : 'c-training-page__unselected-button'}`
                  }
                  label="Web Development"
                  onClick={this.selectDevelopment}
                />
              </li>
              <li>
                <Button
                  className={`c-training-page__button ${this.state.devSelect ?
                    'c-training-page__unselected-button' : null}`
                  }
                  label="Data Science"
                  onClick={this.selectDataScience}
                />
              </li>
            </ul>
          </div>
          {this.state.devSelect ? this.renderSkills(devSkills) : this.renderSkills(sqlSkills)}
        </div>
      </div>
    );
  }
}

export default TrainingPage;
