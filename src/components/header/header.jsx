import React, {Component} from 'react';
import './header.css';

class HeaderComponent extends Component {
    constructor(props) {
      super(props)
      this.state = {
        categorie: "home"
      };
      this.goto = this.goto.bind(this);
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount(){
       window.addEventListener('scroll', this.handleScroll);
    }

    handleScroll(){
      if (window.scrollY >= document.getElementsByClassName("home")[0].offsetTop && window.scrollY < document.getElementsByClassName("about")[0].offsetTop){
        this.setState({
          categorie: "home"
        });
        for(var i=0; i<document.getElementsByClassName("nav-link").length; i++){
            document.getElementsByClassName("nav-link")[i].classList.remove("items")
        };
        document.getElementsByClassName("nav-link")[0].classList.add("items");
      }
      else if (window.scrollY >= document.getElementsByClassName("about")[0].offsetTop && window.scrollY < document.getElementsByClassName("skils")[0].offsetTop){
        this.setState({
          categorie: "about"
        });
        for(var i=0; i<document.getElementsByClassName("nav-link").length; i++){
            document.getElementsByClassName("nav-link")[i].classList.remove("items")
        };
        document.getElementsByClassName("nav-link")[1].classList.add("items");
      }
      else if (window.scrollY >= document.getElementsByClassName("skils")[0].offsetTop && window.scrollY < document.getElementsByClassName("portfolio")[0].offsetTop) {
        this.setState({
          categorie: "skils"
        });
        for(var i=0; i<document.getElementsByClassName("nav-link").length; i++){
            document.getElementsByClassName("nav-link")[i].classList.remove("items")
        };
        document.getElementsByClassName("nav-link")[2].classList.add("items");
      }
      else if (window.scrollY >= document.getElementsByClassName("portfolio")[0].offsetTop && window.scrollY <= (document.getElementsByClassName("portfolio")[0].offsetTop + document.getElementsByClassName("portfolio")[0].offsetTop)){
        this.setState({
          categorie: "portfolio"
        });
        for(var i=0; i<document.getElementsByClassName("nav-link").length; i++){
            document.getElementsByClassName("nav-link")[i].classList.remove("items")
        };
        document.getElementsByClassName("nav-link")[3].classList.add("items");
      }
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

    render() {
      return(
        <div className="header">
        <nav className="nav fixed-top">
          <ul className="nav justify-content-end">
            <li className="nav-item">
            <span className="nav-link items" value="home" onClick={this.goto}>Home</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" value="about" onClick={this.goto}>About</span>
            </li>
            <li className="nav-item">
              <span className="nav-link" value="skils" onClick={this.goto}>Skills</span>
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
