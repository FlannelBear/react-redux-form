import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';
import InputForm from '../InputForm/InputForm';

class App extends Component {
  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Snack Overflow</h1>
          </header>
          <InputForm />
        </div>
    );
  }
}

export default App;
