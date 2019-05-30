import React from 'react';
import sagem from './sagem.png';
import elmazraa from './elmazraa.png';
import sicam from './sicam.png';
import douja from './douja.png';
import sotumeca from './sotumeca.png';
import zodiac from './zodiac.png';
import cherry from './cherry.png';
import threes from './3s.png';
import jci from './jci.png';
import kitmatec from './kitmatec.png';
import um from './um.png';
import './references.css';
import Ref from './Ref';

function References() {
  return (
    <div className="container-fuild text-white py-5 ref">
      <h1 className="text-center">Ils nous ont fait confiance</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <Ref src={sagem} />
        <Ref src={elmazraa} />
        <Ref src={sicam} />
        <Ref src={douja} />
        <Ref src={sotumeca} />
        <Ref src={zodiac} />
        <Ref src={cherry} />
        <Ref src={threes} />
        <Ref src={kitmatec} />
        <Ref src={um} />
        <Ref src={jci} />
      </div>
    </div>
  );
}

export default References;
