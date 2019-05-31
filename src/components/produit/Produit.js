import React from 'react';
import Gallery from './Gallery';

const Produit = () => {
  return (
    <div id="produit">
      <div className="bg-primary">
        <h1 className="text-center py-4" style={{ color: 'white' }}>
          Notre travail
        </h1>
        <div className="bg-white text-white p-5">
          <Gallery className="shadow-lg" />
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <a
              href="https://www.facebook.com/pg/MagicWayDesign/photos/?ref=page_internal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button
                type="button"
                className="btn btn-dark m-4"
                style={{ cursor: 'pointer' }}
              >
                Voir Plus
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
