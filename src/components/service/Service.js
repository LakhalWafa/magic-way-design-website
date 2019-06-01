import React from 'react';

const Service = () => {
  return (
    <div id="service">
      <div style={{ background: 'rgb(194, 10, 111)' }}>
        <h1 className="text-center text-white py-4"> Nos services</h1>
      </div>
      <div className="row align-items-center">
        <div
          className="card text-white text-center col-sm bg-dark mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <div className="card-header">
            <h2 className="card-title">Conception Graphique</h2>
          </div>
          <i className="fab fa-sketch fa-3x p-3 card-img-top text-primary" />
          <div className="card-body">
            <p className="card-text">
              {' '}
              Identité visuelle (logo, entête, cartes de visites, flyers,
              brochures, enveloppes…), affiches publicitaires, insertion
              publicitaires, réalisation de supports papiers (magazines,
              catalogues, menus), habillage de véhicule, banderoles…
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center col-sm bg-secondary mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <div className="card-header">
            <h2 className="card-title">Impression sur tous supports</h2>
          </div>
          <i
            className="fas fa-paint-brush fa-3x p-3 card-img-top"
            style={{
              color: 'rgb(194, 10, 111)'
            }}
          />
          <div className="card-body">
            <p className="card-text">
              {' '}
              Offset : cartes de visites, flyers, brochures, bloc note,
              catalogues, menus, affiches, emballages, étiquettes, magazines,
              badges, autocollants... <br /> Numérique “grand format” : Bâche,
              vinyle, vitrine, panneau mousse, stands, banderole, habillage de
              véhicule, tableaux Mdf...
              <br /> Sérigraphie : Tee-shirt, polo, casquette, clé usb, stylo,
              mug, porte clé... <br /> Textile: Winflags, Roll up, drapeaux,
              rideaux, coussin, sac…
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center col-sm bg-dark mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <div className="card-header">
            <h2 className="card-title">Packaging</h2>
          </div>
          <i className="fas fa-gift fa-3x p-3 card-img-top text-primary" />
          <div className="card-body">
            <p className="card-text">
              {' '}
              Etude, conception et réalisation de cartons, boites, emballages…
            </p>
          </div>
        </div>
        <div
          className="card text-white text-center col-sm bg-secondary mx-lg-2 mx-auto my-3 shadow-lg"
          style={{
            width: '18rem'
          }}
        >
          <div className="card-header">
            <h2 className="card-title">Événementiel</h2>
          </div>
          <i
            className="fas fa-calendar-alt fa-3x p-3 card-img-top"
            style={{ color: 'rgb(194, 10, 111)' }}
          />
          <div className="card-body">
            <p className="card-text">
              {' '}
              Pour tous vos événements personnels et professionnels
              (anniversaires, mariages, séminaires, foires, fin d'année…) nous
              vous offrons une large gamme de produits de décoration et
              d’articles de cadeaux...
            </p>
          </div>
        </div>
      </div>
      <div className="myservice text-hide p-5">Hello</div>
    </div>
  );
};

export default Service;
