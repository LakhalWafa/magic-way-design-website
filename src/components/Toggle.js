import React from 'react';
import About from './about/About';
import Service from './service/Service';
import Produit from './produit/Produit';
import Contact from './contact/Contact';
import References from './references/References';

const Toggle = () => {
  return (
    <div>
      <About />
      <Produit />
      <References />
      <Service />
      <Contact />
    </div>
  );
};

export default Toggle;
