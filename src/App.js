import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './components/TodoList'; //dont need js at end - assumed

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>{this.props.title}</h2>
        </div>
        <TodoList title="Harmons Shopping List" />
      </div>
    );
  }
}

export default App;
