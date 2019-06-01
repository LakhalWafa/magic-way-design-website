import React from 'react';

function Hero(props) {
  return (
    <div
      className="container"
      style={{ position: 'relative', height: '97.7vh' }}
    >
      <div className="text-white" style={{ paddingTop: '30%' }}>
        <div className="bg-dark p-4 border herobg">
          <h1> Your Way, Our Design</h1>
          <p>
            Nous vous proposons des idées simples et enrichissantes, des univers
            visuels distinctifs, une création originale et une impression
            séduisante.
          </p>
          <button
            style={{ cursor: 'pointer' }}
            type="button"
            onClick={props.toggle}
            className="btn btn-outline-light btn-lg"
          >
            Savoir Plus
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
