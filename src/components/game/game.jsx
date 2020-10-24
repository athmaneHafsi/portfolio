import React, {Component} from 'react';
import './game.css';

import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
import Konva from 'konva';

class GameComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height : 0,
            width: 0,
            display: false
        }
    }

    componentDidMount(){
            this.setState({
                height : document.getElementsByClassName("game")[0].offsetHeight,
                width: document.getElementsByClassName("game")[0].offsetWidth,
                display: true
            });
            //this.onload();

    }

    render() {
          return (
              <div className="game">
                <Stage width={window.innerWidth} height={window.innerHeight}>
                  <Layer>
                    
                  </Layer>
                </Stage>
            </div>
          );
    }
}

export default GameComponent
