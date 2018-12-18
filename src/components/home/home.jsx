import React, {Component} from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ArrowIcon from 'material-ui/svg-icons/hardware/keyboard-arrow-down';
import './home.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      root: {
        background: 'linear-gradient(45deg, rgb(12, 106, 160) 30%, rgb(77, 173, 190) 90%)',
        borderRadius: 3,
        border: 0,
        color: 'white',
        height: 48,
        padding: '0 30px',
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      },
    },
  },
  typography: { useNextVariants: true },
});

function ButtonsHome(props) {
  const buttons = {
    buttons: [
      { item: 'ABOUT' },
      { item: 'PORTFOLIO' }
    ],
  }
  console.log(props);
  
  return (
    <MuiThemeProvider theme={theme}>
      {buttons.buttons.map((item, i)=>{
        return <Button onClick={props.onClick} className='button-header' key={i}>{item.item}</Button>
      })}
    </MuiThemeProvider>
  );
}


function ItemsHeader() {
  const icons = {
    items : [
      { item: 'fab fa-linkedin', url: 'https://fr.linkedin.com/in/athmane-hafsi-ab33a7153' },
      { item: 'fab fa-github-square', url: ''}
    ],
  }
  return (
      <div className="itemsHeader">
      {icons.items.map((item, i)=>{
        return (<a href={item.url} key={i} className="url"><i className={item.item}></i></a>)
      })}
      </div>

  );
}


class HomeComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
          height: props.height,
          scrollTo: props.height
        };
      //this.handle = this.handle.bind(this);
    }

    handle(e) {
      console.log('this',e.target); 
    }

    render() {
      const buttons = {
        buttons: [
          { item: 'ABOUT' },
          { item: 'PORTFOLIO' }
        ],
      }
        return (
          <div className="header-wrapper" style={{"height": this.state.height}}>
            <div className="header">
              <MuiThemeProvider theme={theme}>
                {buttons.buttons.map((item, i)=>{
                return <Button onClick={(e) => this.handle(e)} className='button-header' key={i}>{item.item}</Button>
                })}
              </MuiThemeProvider>
              <Button onClick={(e) => this.handle(e)} className='button-header'>test</Button>
            </div>
            <div className="home">
                <h3>Hi ! I'm Athmane Hafsi</h3>
                <h6>Developer Full-Stack</h6>
                <ItemsHeader></ItemsHeader>
            </div>

          </div>
        );
    }
}

export default HomeComponent;