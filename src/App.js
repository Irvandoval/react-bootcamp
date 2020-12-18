import React from 'react';
import logo from './logo.svg';
import './App.css';
import Routing from './Components/Routing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <main className="App-main">
        {/*
          We don't render <Main> here, instead we render <Routing>
          component and it will take care of that
        */}
        <Routing />
      </main>
    </div>
  );
}

export default App;
