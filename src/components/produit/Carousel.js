import React from 'react';
import { Carousel } from 'react-responsive-carousel';

export default ({ src }) => (
  <Carousel autoPlay showIndicators={false}>
    {src.map(i => (
      <div>
        <img src={i} alt="" />
      </div>
    ))}
  </Carousel>
);
