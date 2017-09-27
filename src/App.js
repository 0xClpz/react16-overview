import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Hello} from "./Hello";

class App extends Component {
  state = {
    data: {
      name: 'Antonio',
      error: false,
    }
  };

  componentDidCatch(error, info){
    this.setState({
      error: true,
    });
    // sendErrorLog(error, info);
  }

  fetchFromRemote = () => {
    /**
     * Call some api
     */
    const data = null;
    this.setState({
      data
    });
  };

  render() {
    const {data, error} = this.state;
    return error ? 'Something went wrong' : (
      [
        <header key="header" className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>,
        <p mycustomid="42" key="intro" className="App-intro">
          <button onClick={this.fetchFromRemote}>Fetch</button>
          <Hello data={data}/>
        </p>
      ]
    );
  }
}

export default App;
