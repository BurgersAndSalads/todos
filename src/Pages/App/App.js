import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';

export default class App extends Component {
  render() {
    return (
      <div>
        <nav>
          <Router>
            <Link to="https://github.com/BurgersAndSalads/todos">home page</Link>
          </Router>
        </nav>
      </div>
    );
  } 
}


