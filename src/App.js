import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Logo() {
  return <img src={logo} className="App-logo" alt="logo" />
}

//FUNCTION
// function Hello(props) {
//   return(
//     <p>
//       {props.title}
//     </p>
//   )
// }

// ARROW FUNTCIONS
// const Hello = (props) => <p>{props.title}</p>

class Hello extends Component {
  render() {
    return <h1>{this.props.title}</h1>
  }
}

class Text extends Component {
  render() {
    const textBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

  return (
    <div>
      <p>{this.props.text}</p>
      <p>{this.props.number}</p>
      <p>{textBool}</p>
      <p>{this.props.arrayOfNumbers.join(', ')}</p>
      <p>{mappedNumbers.join(', ')}</p>
      <p>{this.props.objectWithInfo.key}</p>

      {/* <p>{JSON.stringify(this.props.boolean)}</p> */}
    </div>
  )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
        <Hello title='Hello word'/>
        <Text
          arrayOfNumbers={[2, 3, 10]}
          objectWithInfo={{ key: 'value', key2: 'othervValue'}}
          isActivated
          number={2*2}
          text='This is the component text'
        />
      </header>
    </div>
  );
}

export default App;
