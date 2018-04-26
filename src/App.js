import React, { Component } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }


  componentWillMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  handleWindowSizeChange = () => {
    this.setState({ width: window.innerWidth });
  };

  render() {

    const { width } = this.state;

    return (
      <div className="App">

        <Header width={width} />

        <Home width={width} />

        <Footer width={width} />

      </div>
    );
  }
}

export default App;
