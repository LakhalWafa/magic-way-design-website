import React from 'react';
import Image from './Image';
import References from '../references/References';

const Produit = () => {
  return (
    <div id="produit">
      <div className="bg-primary">
        <h1 className="text-center py-4 mb-0" style={{ color: 'white' }}>
          Our Work
        </h1>
        <div className="container bg-dark text-white p-5">
          <Image />
        </div>
        <References />
      </div>
    </div>
  );
};

export default Produit;
