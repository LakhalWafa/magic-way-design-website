import React, { Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import './App.css';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/home';
import About from './components/about/About';
import Service from './components/service/Service';
import Produit from './components/produit/Produit';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Home />
        <About />
        <Produit />
        <Service />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </React.Fragment>
    );
  }
}

export default App;
