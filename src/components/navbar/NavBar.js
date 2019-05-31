import React, { Component } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from './logo.png';
import './navbar.css';

class NavBar extends Component {
  state = {
    isTop: true
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      if (isTop !== this.state.isTop) {
        this.setState({ isTop });
      }
    });
  }
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <div>
        <nav
          className={
            this.state.isTop
              ? 'mynav navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-white'
              : 'navbar navbar-expand-lg navbar-dark bg-dark fixed-top border-bottom border-white'
          }
        >
          <div className="container">
            <Link
              className="navbar-brand"
              onClick={this.scrollToTop}
              style={{ cursor: 'pointer' }}
            >
              <img src={logo} alt="Magic Way Design" />
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
                <li className="nav-item px-2">
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
                <li className="nav-item px-2">
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
                <li className="nav-item  px-2">
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
                <li className="nav-item  px-2">
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
