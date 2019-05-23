import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from './logo.png';

class NavBar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container">
            <Link
              className="navbar-brand"
              onClick={this.scrollToTop}
              style={{ cursor: 'pointer' }}
            >
              <img src={logo} alt="" />
            </Link>
            <button
              style={{ cursor: 'pointer' }}
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse justify-content-end"
              id="navbarNav"
            >
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link
                    style={{ cursor: 'pointer' }}
                    className="nav-link"
                    activeClass="active"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Home{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ cursor: 'pointer' }}
                    className="nav-link"
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ cursor: 'pointer' }}
                    className="nav-link"
                    activeClass="active"
                    to="produit"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Product{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ cursor: 'pointer' }}
                    className="nav-link"
                    activeClass="active"
                    to="service"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Service{' '}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    style={{ cursor: 'pointer' }}
                    className="nav-link"
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                  >
                    Contact{' '}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
