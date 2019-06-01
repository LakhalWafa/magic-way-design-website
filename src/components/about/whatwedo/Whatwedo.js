import React from 'react';
import './whatwedo.css';
import slogan from './slogan.png';
import target from './target.png';
import vision from './vision.png';

export default function Whatwedo() {
  return (
    <div className="container">
      <div className="row">
        <div
          className="card text-white text-center col-sm bg-dark mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <img
            src={target}
            alt=""
            className="card-img-top p-2 mx-auto"
            style={{ width: '100px', height: '100px' }}
          />
          <div className="card-body">
            <h2 className="card-title">Nos objectifs</h2>
            <p className="card-text">
              Instaurer/Développer votre image de marque.
              <br />
              Réussir vos compagnes de communication.
              <br />
              Conseil et accompagnement dans votre démarche marketing et
              commerciale.
              <br />
              Répondre à vos attentes en termes d’innovation, coûts et qualité.
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center col-sm bg-dark mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <img
            src={vision}
            alt=""
            className="card-img-top p-2 mx-auto"
            style={{ width: '100px', height: '100px' }}
          />

          <div className="card-body">
            <h2 className="card-title">Notre vision</h2>
            <p className="card-text">Conception d’une manière magique.</p>
          </div>
        </div>

        <div
          className="card text-white text-center col-sm bg-dark mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <img
            src={slogan}
            alt=""
            className="card-img-top p-2 mx-auto"
            style={{ width: '100px', height: '100px' }}
          />
          <div className="card-body">
            <h2 className="card-title">Notre slogan</h2>
            <p className="card-text">
              « Your way, Our design »<br />
              (votre chemin notre conception)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
