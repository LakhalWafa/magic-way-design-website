import React from 'react';
import { Link } from 'react-scroll';
import './jumbetron.css';

const Jumbetron = () => {
  return (
    <div
      className="jumbotron text-center jumbotron-fluid"
      style={{ height: '100vh' }}
    >
      <div className="container" style={{ marginTop: '15%' }}>
        <h1 className="display-3">Your Way, Our Design</h1>
        <p className="lead">
          Nous vous proposons des idées simples et enrichissantes, des univers
          visuels distinctifs, une création originale et une impression
          séduisante.
        </p>
        <Link
          style={{ cursor: 'pointer' }}
          to="more"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <button type="button" className="btn btn-outline-light btn-lg">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Jumbetron;
