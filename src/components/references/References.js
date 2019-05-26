import React from 'react';
import sagem from './sagem.png';
import elmazraa from './elmazraa.png';
import sicam from './sicam.png';
import douja from './douja.png';
import sotumeca from './sotumeca.png';
import zodiac from './zodiac.png';
import './references.css';

function References() {
  return (
    <div className="container bg-dark text-white mb-0 pb-5">
      <h1 className="text-center">They trusted us</h1>
      <div className="d-flex flex-wrap justify-content-center">
        <div className="grow m-1">
          <img src={sagem} alt="" />
        </div>
        <div className="grow m-1">
          <img src={elmazraa} alt="" />
        </div>
        <div className="grow m-1">
          <img src={sicam} alt="" />
        </div>
        <div className="grow m-1">
          <img src={douja} alt="" />
        </div>
        <div className="grow m-1">
          <img src={sotumeca} alt="" />
        </div>
        <div className="grow m-1">
          <img src={zodiac} alt="" />
        </div>
      </div>
    </div>
  );
}

export default References;
