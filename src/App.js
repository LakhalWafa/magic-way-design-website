import React, { Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import Footer from './components/footer/Footer';
import Hero from './components/home/jumbetron/Hero';
import Toggle from './components/Toggle';
import { Transition, animated } from 'react-spring/renderprops';

class App extends Component {
  state = { show: false };

  toggle = e => {
    e.preventDefault();
    this.setState({ show: !this.state.show });
  };
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        <Home />
        <Hero toggle={this.toggle} />
        <Transition
          native
          items={this.state.show}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <Toggle />
              </animated.div>
            ))
          }
        </Transition>
        <Footer />
        <ScrollUpButton style={{ width: 30, height: 30 }} />
      </BrowserRouter>
    );
  }
}

export default App;
