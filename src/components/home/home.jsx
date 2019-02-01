import React, {Component} from 'react';
import './home.css';
import '../ArrowDown/ArrowDown';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
library.add(fab);

class HomeComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }; 
  }

  handle(e) {
    window.scrollTo(0,'100vh');
  }

  goto(e) {
    console.log(e.target.getAttribute("href"));
  }

  render() {
    return(
        <div className="homeClasse">
          <h3>Hi ! I'm Athmane Hafsi</h3>
          <h6>Developer Full-Stack</h6>
          <div className="itemsHeader">
            <a href='https://fr.linkedin.com/in/athmane-hafsi-ab33a7153' className="url"><FontAwesomeIcon icon={['fab', 'linkedin']} /></a>
            <a href='https://github.com/athmaneHafsi' className="url"><FontAwesomeIcon icon={['fab', 'github-square']} /></a>
          </div>
        </div>
        );
    }
}

export default HomeComponent;