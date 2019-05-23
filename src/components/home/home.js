import React from 'react';
import Jumbetron from './jumbetron/Jumbetron';
import Newsletter from './newsletter/Newsletter';

export default function home() {
  return (
    <div id="home">
      <Jumbetron />
      <Newsletter />
    </div>
  );
}
