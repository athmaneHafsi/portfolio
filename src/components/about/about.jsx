import React, {Component} from 'react';
import './about.css';
import photo from "./Unknown.png";



class AboutComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

          return (
            <div className="aboutMaster">

                <div className="aboutTitle">
                  <h3 className="aboutMe">About Me...</h3>
                </div>
                <div className="aboutImage">
                  <img src={photo}/>
                </div>
                <div className="aboutImage">
                  <img src={photo}/>
                </div>
            
              </div>
          );
    }
}
export default AboutComponent
