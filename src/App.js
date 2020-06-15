import React from 'react';
import logo from './logo.svg';
import './App.css';

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />
}

function Hello(props) {
  return(
    <p>
      {props.title}
    </p>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Hello title='Hello word'/>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
