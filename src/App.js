
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    document.body.style.backgroundColor = '#282c34'
    return (
      <div>
        <Navbar/>
        <News country="in" category="technology"/>
      </div>
    )
  }
}


