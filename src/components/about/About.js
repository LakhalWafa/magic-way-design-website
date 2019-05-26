import React from 'react';
import './about.css';
import about from './about.jpg';
import Whatwedo from './whatwedo/Whatwedo';

const About = () => {
  return (
    <div id="about" style={{ background: 'rgb(194, 10, 111)' }}>
      <h1 className="text-center text-white py-4">About Us</h1>
      <div className="container">
        <div className="row bg-dark">
          <div className="col-sm">
            <div className="container text-white">
              <p className="lead pt-5">
                Magic Way Design est une agence de communication qui vous
                accompagne durant l’analyse de vos projets, vous conseille dans
                vos choix publicitaires stratégiques et modélise votre
                architecture de communication tout en accrochant un regard
                professionnel, fort et esthétique à votre image de marque et
                votre identité. Nous vous proposons des idées simples et
                enrichissantes, des univers visuels distinctifs, une création
                originale et une impression séduisante.
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div>
              <img alt="" className="img-fluid rounded mt-2" src={about} />
            </div>
          </div>

          <div className="w-100" />

          <div className="col-sm">
            <Whatwedo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
