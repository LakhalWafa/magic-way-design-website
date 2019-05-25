import React from 'react';
import sagem from './sagem.png';
import elmazraa from './elmazraa.png';
import sicam from './sicam.png';
import douja from './douja.png';
import sotumeca from './sotumeca.png';
import zodiac from './zodiac.png';

function References() {
  return (
    <div className="container bg-dark text-white mb-0 pb-5">
      <h1 className="text-center">They trusted us</h1>
      <div className="d-flex flex-row justify-content-center">
        <img src={sagem} alt="" className="m-2" />
        <img src={elmazraa} alt="" className="m-2" />
        <img src={sicam} alt="" className="m-2" />
        <img src={douja} alt="" className="m-2" />
        <img src={sotumeca} alt="" className="m-2" />
        <img src={zodiac} alt="" className="m-2" />
      </div>
    </div>
  );
}

export default References;
