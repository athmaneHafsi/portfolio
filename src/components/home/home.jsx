import React, {Component} from 'react';
import './home.css';
import '../ArrowDown/ArrowDown';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fab);
library.add(fas);


class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }; 
    this.goto = this.goto.bind(this);
  }

  handle(e) {
    window.scrollTo(0,'100vh');
  }

  goto(e) {
    window.scrollTo(0, document.getElementsByClassName("about")[0].offsetTop)
  }

  render() {
    return(
        <div className="homeClasse">
          <h3>Hi ! I'm Athmane Hafsi</h3>
          <h6>Developer Full-Stack | Student</h6>
          <div className="itemsHeader">
            <a href='https://fr.linkedin.com/in/athmane-hafsi-ab33a7153' className="url linkedin"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href='https://github.com/athmaneHafsi' className="url github"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
          </div>
          <div className="arrow">
          <FontAwesomeIcon className="chevron" onClick={this.goto} icon={['fas', 'chevron-circle-down']} />
          <span className='click'>Click here</span>
          </div>
        </div>
        );
    }
}

export default HomeComponent;