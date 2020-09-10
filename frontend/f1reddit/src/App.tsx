import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import TopBar from './Components/TopBar';
import HomePage from './Components/HomePage';
import { theme } from './Components/styles';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Router>
        <Route path="/" exact component={HomePage}/>
      </Router>
    </ThemeProvider>
  );
}
