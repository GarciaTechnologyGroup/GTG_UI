import React from 'react';
import PropTypes from 'prop-types';
import './styles.less';

const propTypes = {
  className: PropTypes.string,
  enter: PropTypes.string,
  exit: PropTypes.string,
  children: PropTypes.node,
  height: PropTypes.number.isRequired,
};

const defaultProps = {
  className: null,
  enter: null,
  exit: null,
  children: null,
};

class Sticky extends React.Component {
  componentDidMount() {
    const setInitialHeights = (elements) => {
      [].forEach.call(elements, (sticky) => {
        sticky.setAttribute('data-sticky-initial', sticky.getBoundingClientRect().top);
      });
    };

    const stickies = document.querySelectorAll('[data-sticky]');
    setInitialHeights(stickies);

    window.addEventListener('scroll', () => {
      const top = document.documentElement.scrollTop || document.body.scrollTop;
      const bottom = document.documentElement.scrollHeight || document.body.scrollHeight;
      [].forEach.call(stickies, sticky => {
        const stickyInitial = parseInt(sticky.getAttribute('data-sticky-initial'), 10);
        const stickyEnter = parseInt(sticky.getAttribute('data-sticky-enter'), 10);
        const stickyExit = parseInt(sticky.getAttribute('data-sticky-exit'), 10);
        if (top >= stickyEnter && top <= stickyExit) {
          sticky.classList.add('sticky');
        } else {
          sticky.classList.remove('sticky');
        }
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    const { className, enter, exit, children, height } = this.props;
    return (
      <div
        className={className}
        data-sticky
        data-sticky-enter={enter}
        data-sticky-exit={exit}
        style={{ height }}
      >
        {children}
      </div>
    );
  }
}

Sticky.propTypes = propTypes;
Sticky.defaultProps = defaultProps;
export default Sticky;
