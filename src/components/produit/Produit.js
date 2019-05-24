import React from 'react';
import Image from './Image';

const Produit = () => {
  return (
    <div id="produit">
      <div className="bg-primary">
        <h1 className="text-center py-4 mb-0" style={{ color: 'white' }}>
          Our Work
        </h1>
        <div className="container bg-dark text-white p-4">
          <Image />
        </div>
      </div>
    </div>
  );
};

export default Produit;
