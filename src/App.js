import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import './App.css';
import HomeComponent from './components/home/home';
import AboutComponent from './components/about/about';
import GameComponent from './components/game/game';
import HeaderComponent from './components/header/header';
import SkilsComponent from './components/skils/skils';
import PortfolioComponent from './components/portfolio/portfolio';

library.add(fab);

class App extends React.Component {
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
  }

  render() {
    return (
      <div className="App">
          <HeaderComponent refProp={this.myRef} />
        <div className="home" >
          <HomeComponent />
        </div>
        <div className="about">
        <AboutComponent />
        </div>
        <div className="skils">
        <SkilsComponent />
        </div>
        <div className="portfolio">
        <PortfolioComponent />
        </div>
      </div>
    );
  }
}

export default App;
