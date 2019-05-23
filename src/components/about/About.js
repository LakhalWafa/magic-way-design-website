import React from 'react';
import './about.css';
import about from './about.png';
import aside from './aside.jpg';

const About = () => {
  return (
    <div id="about" className="bg-dark">
      <div className="container">
        <div className="row bg-dark">
          <div className="col-sm">
            <div className="container text-white">
              <h1 className="text-center pt-2">About Us</h1>
              <p className="lead">
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
              <img
                alt=""
                className="img-fluid rounded-circle mt-2"
                src={aside}
              />
            </div>
          </div>
          <div className="w-100" />
          <div className="col-sm">
            <div>
              <img
                alt=""
                className="img-fluid rounded-circle mb-2"
                src={about}
              />
            </div>
          </div>
          <div className="col-sm align-items-center">
            <div className="container text-white">
              <h1 className="text-center pt-2">What We Do</h1>
              <ul>
                <li>
                  <h3>Nos objectifs :</h3>
                  <ul>
                    <li>Instaurer/Développer votre image de marque.</li>
                    <li>Réussir vos compagnes de communication.</li>
                    <li>
                      Conseil et accompagnement dans votre démarche marketing et
                      commerciale.
                    </li>
                    <li>
                      Répondre à vos attentes en termes d’innovation, coûts et
                      qualité.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3>Notre vision :</h3>
                  Conception d’une manière magique.
                </li>
                <li>
                  <h3>Notre slogan :</h3>« Your way, Our design » (Votre chemin
                  notre conception).
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
