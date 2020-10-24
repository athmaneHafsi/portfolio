import React, { Component } from 'react';
import './skils.css';
import CircularProgressbar from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class SkilsComponent extends Component {
    constructor(props) {
      super(props)
    }

    render() {
      const percentage = 90;
        return(
            <div className="skillsMaster">
              <div className='mySkills'>My Skills</div>
              <div className="Circleprogressbar">
                  <CircularProgressbar className="progressbar" initialAnimation={true} percentage={percentage} text={`${percentage}%`} styles={{
                      path: { stroke: `rgba(77, 173, 190, ${percentage / 100})` },
                      text: { fill: 'rgb(77, 173, 190)', fontSize: '16px' },
                  }}/>
              </div>
            </div>
        )
    }
}
export default SkilsComponent;
