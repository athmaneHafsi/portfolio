import React, { Component } from 'react'
import './App.css'
import HomeComponent from './components/home/home'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }

  }
  
  render() {
    return (
      <HomeComponent></HomeComponent>
    )
  }
}

export default App