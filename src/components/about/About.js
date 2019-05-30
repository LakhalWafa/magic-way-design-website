import React from 'react';
import './about.css';
import Whatwedo from './whatwedo/Whatwedo';

const About = () => {
  return (
    <div id="about">
      <div style={{ background: 'rgb(194, 10, 111)' }}>
        <h1 className="text-center text-white py-4">À propos de nous</h1>
      </div>
      <div className="container-fluid">
        <div className="container pt-4">
          <div className="row">
            <div className="col-sm text-dark text-center">
              <h3 className="text-center pt-3">Magic Way Design</h3>
              <p className="lead">
                Est une agence de communication qui vous accompagne durant
                l’analyse de vos projets, vous conseille dans vos choix
                publicitaires stratégiques et modélise votre architecture de
                communication tout en accrochant un regard professionnel, fort
                et esthétique à votre image de marque et votre identité. <br />{' '}
                Nous vous proposons des idées simples et enrichissantes, des
                univers visuels distinctifs, une création originale et une
                impression séduisante.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-100" />
      <div className="text-center text-dark p-4">
        <i class="fas fa-star p-2 star" />
        <i class="fas fa-star p-2 star" />
        <i class="fas fa-star p-2 star" />
      </div>

      <div className="col-sm">
        <Whatwedo />
      </div>
      <div className="myabout text-hide p-5">Hello</div>
    </div>
  );
};

export default About;
