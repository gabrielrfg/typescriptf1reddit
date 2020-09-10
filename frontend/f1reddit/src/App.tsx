import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from './Components/HomePage';

export default function App() {
  return (
    <Router>
      <Route path="/" exact component={HomePage}/>
    </Router>
  );
}

