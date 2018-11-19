import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { getWidth, getHeight } from '../../../utilityFns/resize';
import Sticky from '../../basic/Sticky';
import CircleLogo from '../../basic/CircleLogo';
import './styles.less';

const propTypes = {
  hasLogo: PropTypes.bool,
};

const defaultProps = {
  hasLogo: true,
};

class NavigationOne extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      height: 80,
      windowWidth: getWidth(),
      windowHeight: getHeight(),
    };
    this.toggleMobileNav = this.toggleMobileNav.bind(this);
    this.updateDimensions = this.updateDimensions.bind(this);
    this.onResize = this.onResize.bind(this);
  }

  componentDidMount() {
    this.updateDimensions();
    if (typeof window !== 'undefined') window.addEventListener('resize', this.onResize, false);
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') window.removeEventListener('resize', this.onResize);
  }


  onResize() {
    if (this.rqf) return;
    if (typeof window !== 'undefined') {
      this.rqf = window.requestAnimationFrame(() => {
        this.rqf = null;
        this.updateDimensions();
      });
    }
  }

  updateDimensions() {
    const windowWidth = getWidth();
    const windowHeight = getHeight();
    if (windowWidth > 650) {
      this.setState({
        windowWidth,
        windowHeight,
        height: 80,
      });
    } else {
      this.setState({
        windowWidth,
        windowHeight,
      });
    }
  }

  toggleMobileNav() {
    if (window.innerWidth > 750) return;
    const { height } = this.state;
    const newHeight = height === 230
    ? 80 : 230;
    this.setState({ height: newHeight });
  }

  render() {
    const { height } = this.state;
    return (
      <Sticky
        className="c-navigation-one__main-nav"
        height={height}
        enter="0"
        exit="5000"
      >
        <nav>
          <div className="c-navigation-one__logo">
            <CircleLogo hasLogo={this.props.hasLogo} />
          </div>
          <div
            id="mobile-toggle"
            onClick={this.toggleMobileNav}
            onKeyDown={this.toggleMobileNav}
            tabIndex={0}
            role="button"
          >
            <div className="c-navigation-one__bar" />
            <div className="c-navigation-one__bar" />
            <div className="c-navigation-one__bar" />
          </div>
          <ul className="c-navigation-one__nav-menu">
            <li>
              <NavLink
                exact
                to="/"
                activeStyle={{ color: '#0071bc' }}
                onClick={this.toggleMobileNav}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/training"
                activeStyle={{ color: '#0071bc' }}
                onClick={this.toggleMobileNav}
              >
                Training
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                activeStyle={{ color: '#0071bc' }}
                onClick={this.toggleMobileNav}
              >
                About Us
              </NavLink>
            </li>
          </ul>
        </nav>
      </Sticky>
    );
  }
}

NavigationOne.propTypes = propTypes;
NavigationOne.defaultProps = defaultProps;
export default NavigationOne;
