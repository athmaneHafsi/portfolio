import React, {Component} from 'react';
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
      super(props)

      this.state = {
        categorie: "home"
      };
      this.goto = this.goto.bind(this);
      this.handle = this.handle.bind(this);
    }
  
    goto(e){
        var cat = e.target.getAttribute('value');
        if (this.state.categorie === cat){
       
        }else {
          this.setState({
            categorie: cat 
          });
        }

      for(var i=0; i<document.getElementsByClassName("nav-link").length; i++){
          document.getElementsByClassName("nav-link")[i].classList.remove("items")
      };
        e.target.classList.add("items");
        window.scrollTo(0,document.getElementsByClassName(cat)[0].offsetTop);
    }

    handle(e){
      console.log(this.state.categorie)
    }

    render() {
      return(
        <div className="header">
        <nav className="nav fixed-top">
          <ul className="nav justify-content-end">
            <li className="nav-item">
            <span className="nav-link" value="home" onClick={this.goto}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" value="about" onClick={this.goto}>About</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" value="skils" onClick={this.goto}>Skils</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" value="portfolio" onClick={this.goto}>Portfolio</span>
            </li>
          </ul>
      </nav>
      </div>
            );
    }
}

export default HeaderComponent;