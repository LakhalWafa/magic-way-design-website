import React from 'react';
import target from './target.png';
import vision from './vision.png';
import slogan from './slogan.png';

export default function Whatwedo() {
  return (
    <div className="container text-white bg-dark">
      <ul className="row text-center my-4 p-4">
        <li className="col-sm">
          <img src={target} alt="" className="pl-4" />
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
          <img src={vision} alt="" />
          <h3>Notre vision</h3>
          Conception d’une manière magique.
        </li>
        <li className="col-sm">
          <img src={slogan} alt="" />
          <h3>Notre slogan</h3>« Your way, Our design »
        </li>
      </ul>
    </div>
  );
}
