import React, { Component } from 'react';
import './App.css';
import { Router } from '@reach/router';
import Tracker from './components/Tracker';
import Navbar from './components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Navbar />
        </header>
        <Router>
          <Tracker path='/Tracker/:weekNo' />
        </Router>
      </div>
    );
  }
}

export default App;
