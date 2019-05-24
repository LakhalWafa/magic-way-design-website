import React from 'react';
import { Link } from 'react-scroll';
import './jumbetron.css';

const Jumbetron = () => {
  return (
    <div
      className="jumbotron text-center text-white jumbotron-fluid mb-0"
      style={{ marginTop: '5%' }}
    >
      <div className="container" style={{ marginTop: '20%' }}>
        <h1 className="display-4">Your Way, Our Design</h1>
        <p className="lead">
          Nous vous proposons des idées simples et enrichissantes, des univers
          visuels distinctifs, une création originale et une impression
          séduisante.
        </p>
        <Link
          style={{ cursor: 'pointer' }}
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button type="button" className="btn btn-outline-light btn-lg mb-5">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jumbetron;
