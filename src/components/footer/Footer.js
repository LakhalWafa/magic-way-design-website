/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import facebook from './facebook.png';
import instagram from './instagram.png';
import linkedin from './linkedin.png';

const Footer = () => {
  return (
    <div
      className="py-4 mb-0"
      style={{ color: 'white', background: 'rgb(194, 10, 111)' }}
    >
      <div className="container">
        <p className="text-center">
          &copy; 2019 Magic Way Design. All Rights Reserved.
        </p>

        <div className="row justify-content-center">
          <a href="https://www.facebook.com/MagicWayDesign/" target="_blank">
            <img src={facebook} alt="" className="m-1" />
          </a>
          <a href="https://www.instagram.com/magicwaydesign/" target="_blank">
            <img src={instagram} alt="" className="m-1" />
          </a>
          <a
            href="https://www.linkedin.com/in/magic-way-design-49b58a151/"
            target="_blank"
          >
            <img src={linkedin} alt="" className="m-1" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
