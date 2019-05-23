import React from 'react';
import conception from './conception.png';
import impression from './impression.png';
import packaging from './packaging.png';
import event from './event.png';

const Service = () => {
  return (
    <div id="service">
      <div style={{ background: 'rgb(194, 10, 111)' }}>
        <h1 className="text-center text-white py-4 mb-0"> Our Services</h1>
        <div className="container bg-dark text-white">
          <div className="row">
            <div className="col bg-dark border" style={{ color: 'white' }}>
              <div className="container pt-3 text-center">
                <img src={conception} alt="" />
                <h1>Conception Graphique</h1>
                <p>
                  Identité visuelle (logo, entête, cartes de visites, flyers,
                  brochures, enveloppes…), affiches publicitaires, insertion
                  publicitaires, réalisation de supports papiers (magazines,
                  catalogues, menus), habillage de véhicule, banderoles…
                </p>
              </div>
            </div>
            <div className="col bg-dark border" style={{ color: 'white' }}>
              {' '}
              <div className="container pt-3 text-center">
                <img src={impression} alt="" />
                <h1>Impression sur tous supports</h1>
                <p>
                  Offset : cartes de visites, flyers, brochures, bloc note,
                  catalogues, menus, affiches, emballages, étiquettes,
                  magazines, badges, autocollants... Numérique “grand format” :
                  Bâche, vinyle, vitrine, panneau mousse, stands, banderole,
                  habillage de véhicule, tableaux Mdf... Sérigraphie :
                  Tee-shirt, polo, casquette, clé usb, stylo, mug, porte clé...
                  Textile: Winflags, Roll up, drapeaux, rideaux, coussin, sac…
                </p>
              </div>
            </div>
            <div className="w-100" />
            <div className="col bg-dark border" style={{ color: 'white' }}>
              {' '}
              <div className="container pt-3 text-center">
                <img src={packaging} alt="" />
                <h1> Packaging</h1>
                <p>
                  Etude, conception et réalisation de cartons, boites,
                  emballages…
                </p>
              </div>
            </div>
            <div className="col bg-dark border" style={{ color: 'white' }}>
              {' '}
              <div className="container pt-3 text-center">
                <img src={event} alt="" />
                <h1> Événementiel</h1>
                <p>
                  Pour tous vos événements personnels et professionnels
                  (anniversaires, mariages, séminaires, foires, fin d'année…)
                  nous vous offrons une large gamme de produits de décoration et
                  d’articles de cadeaux...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
