import React from 'react';

export default function Whatwedo() {
  return (
    <div className="container text-dark bg-white">
      <ul className="row text-center my-4 p-4">
        <li className="col-sm">
          <i className="fas fa-bullseye fa-5x mb-2" />
          <h3>Nos objectifs</h3>
          <ul>
            <li>Instaurer/Développer votre image de marque.</li>
            <li>Réussir vos compagnes de communication.</li>
            <li>
              Conseil et accompagnement dans votre démarche marketing et
              commerciale.
            </li>
            <li>
              Répondre à vos attentes en termes d’innovation, coûts et qualité.
            </li>
          </ul>
        </li>
        <li className="col-sm">
          <i className="far fa-eye fa-5x mb-2" />
          <h3>Notre vision</h3>
          Conception d’une manière magique.
        </li>
        <li className="col-sm">
          <i className="far fa-lightbulb fa-5x mb-2" />
          <h3>Notre slogan</h3>« Your way, Our design »
        </li>
      </ul>
    </div>
  );
}
