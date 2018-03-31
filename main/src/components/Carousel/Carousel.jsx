import React from 'react';
import PropTypes from 'prop-types';
import { findDOMNode } from 'react-dom';
import throttle from 'lodash.throttle';
import scrollTo from 'src/utilityFns/scrollToAnimate';
import Bio from 'src/components/Bio';
import './styles.less';

const propTypes = {
  bios: PropTypes.arrayOf([PropTypes.object]).isRequired,
};

class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numOfSlidesToScroll: 4,
      allTheWayLeft: false,
      allTheWayRight: false,
    };
    this.animatingLeft = false;
    this.animatingRight = false;
    this.throttleResize = throttle(this.onResize, 250);
    this.throttleScroll = throttle(this.onScroll, 250);
  }

  componentDidMount() {
    this.checkNumOfSlidesToScroll();
    this.checkIfAllTheWayOver();
    window.addEventListener('resize', this.throttleResize);
    window.addEventListener('keydown', this.onKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.throttleResize);
    window.removeEventListener('keydown', this.onKeydown);
  }

  onScroll = () => {
    this.checkIfAllTheWayOver();
  };

  onResize = () => {
    this.checkNumOfSlidesToScroll();
  };

  onKeydown = (e) => {
    const leftArrow = e.keyCode === 37;
    const rightArrow = e.keyCode === 39;

    if (leftArrow && !this.state.allTheWayRight) {
      if (!this.animatingLeft) {
        this.animatingLeft = true;
        this.handleLeftNav().then(() => {
          this.animatingLeft = false;
        });
      }
    } else if (rightArrow && !this.state.allTheWayRight) {
      if (!this.animatingRight) {
        this.animatingRight = true;
        this.handleRightNav().then(() => {
          this.animatingRight = false;
        });
      }
    }
  };

  checkIfAllTheWayOver = () => {
    const allTheWayLeft = this.carouselViewport.scrollLeft === 0;

    // If scrollLeft + lengthOfViewPortOffsetWidth === real length of the viewport
    // 50 states each with a width of 120px. 50 * 120 === real length of viewport
    const amountScrolled = this.carouselViewport.scrollLeft;
    const viewportLength = this.carouselViewport.clientWidth;
    const totalWidthOfCarousel = this.carouselViewport.scrollWidth;
    const allTheWayRight = (amountScrolled + viewportLength) === totalWidthOfCarousel;

    if (this.state.allTheWayLeft !== allTheWayLeft || this.state.allTheWayRight !== allTheWayRight) {
      this.setState({
        allTheWayLeft,
        allTheWayRight,
      });
    }
  };

  checkNumOfSlidesToScroll = () => {
    let numOfSlidesToScroll;
    if (window.innerWidth <= 900) {
      numOfSlidesToScroll = 1;
    } else {
      numOfSlidesToScroll = 1;
    }
    if (this.state.numOfSlidesToScroll !== numOfSlidesToScroll) {
      this.setState({
        numOfSlidesToScroll,
      });
    }
  };

  widthAndTimeToScroll = () => {
    const numOfSlidesToScroll = this.state.numOfSlidesToScroll;
    if (numOfSlidesToScroll === 'full') {
      return {
        widthToScroll: this.carouselViewport.offsetWidth,
        timeToScroll: 400,
      };
    }
    const widthOfSlide = findDOMNode(this.singleBio).offsetWidth;
    const timeToMoveOneSlide = 400;
    return {
      widthToScroll: numOfSlidesToScroll * widthOfSlide,
      timeToScroll: Math.min((numOfSlidesToScroll * timeToMoveOneSlide), 400),
    };
  };

  handleLeftNav = () => {
    const { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    const newPos = this.carouselViewport.scrollLeft - widthToScroll;

    return scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: timeToScroll,
      scrollDirection: 'scrollLeft',
      callback: this.checkIfAllTheWayOver,
      context: this,
    });
  };

  handleRightNav = () => {
    const { widthToScroll, timeToScroll } = this.widthAndTimeToScroll();
    const newPos = this.carouselViewport.scrollLeft + widthToScroll;

    return scrollTo({
      element: this.carouselViewport,
      to: newPos,
      duration: timeToScroll,
      scrollDirection: 'scrollLeft',
    });
  };

  renderSlides(data) {
    return data.map((person) => (
      <div
        className="c-bio__wrapper"
        ref={compslide => this.singleBio = compslide}
        key={person.name}
      >
        <Bio
          name={person.name}
          bio={person.bio}
          photo={person.photo}
          title={person.title}
        />
      </div>
    ));
  }

  render() {
    return (
      <div className="c-carousel__container">
        <div className="c-carousel__control-panel">
          <button
            className="c-carousel__button c-carousel__button--left"
            onClick={this.handleLeftNav}
          />
          <button
            className="c-carousel__button c-carousel__button--right"
            onClick={this.handleRightNav}
          />
        </div>
        <div
          className="c-carousel__viewport"
          ref={(viewport) => { this.carouselViewport = viewport; }}
          onScroll={this.throttleScroll}
        >
          {this.renderSlides(this.props.bios)}
        </div>
      </div>
    );
  }
}

Carousel.propTypes = propTypes;
export default Carousel;
