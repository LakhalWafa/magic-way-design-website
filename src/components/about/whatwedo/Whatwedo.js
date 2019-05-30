import React from 'react';
import './whatwedo.css';

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
          <i className="fas fa-bullseye fa-3x p-3 card-img-top" />

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
          <i class="fas fa-eye fa-3x p-3 card-img-top" />

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
          <i class="fas fa-gem fa-3x p-3 card-img-top" />
          <div className="card-body">
            <h2 className="card-title">Notre slogan</h2>
            <p className="card-text">« Your way, Our design »</p>
          </div>
        </div>
      </div>
    </div>
  );
}
