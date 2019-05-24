import React, { Component } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import { BrowserRouter } from 'react-router-dom';
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
      <BrowserRouter>
        <NavBar />
        <Home />
        <About />
        <Produit />
        <Service />
        <Contact />
        <Footer />
        <ScrollUpButton />
      </BrowserRouter>
    );
  }
}

export default App;
