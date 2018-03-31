import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';
import NavigationOne from '../basic/NavigationOne';
import LandingPage from '../../pages/LandingPage';
import AboutPage from '../../pages/AboutPage';
import TrainingPage from '../../pages/TrainingPage';
import ServicesPage from '../../pages/ServicesPage';
import NotFound from '../../pages/NotFound';
import Footer from '../Footer';
import '../../../style/normalize.css';
import './elements.less';
import './styles.less';

class App extends React.Component {
  state = {
    shadowHeight: 0,
  };

  componentDidMount() {
    window.addEventListener('scroll', () => {
      if (this.state.shadowHeight === 80) return;
      this.setState({
        shadowHeight: 80,
      });
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll');
  }

  render() {
    return (
      <BrowserRouter>
        <div className="c-app__page-container">
          <div className="c-app__content-container">
            <div className="c-app__shadowDiv" style={{height: this.state.shadowHeight}} />
            <NavigationOne hasLogo />
            <Switch>
              <Route exact path="/" component={LandingPage} />
              <Route path="/about-us" component={AboutPage} />
              <Route exact path="/training" component={TrainingPage} />
              <Route path="/services" component={ServicesPage} />
              <Route component={NotFound} />
            </Switch>
          </div>
          <Footer hasLogo={false} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
