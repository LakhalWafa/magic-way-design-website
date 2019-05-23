import React from 'react';

const Coordinates = () => {
  return (
    <div className="container my-5">
      <div className="mb-4">
        <small>Adresse</small>
        <h6> 22, RN1 Hammam-Lif, Ben Arous Hammam-Lif</h6>
      </div>
      <div className="mb-4">
        <small>Email</small> <h6> magic-way@outlook.fr</h6>
      </div>
      <div className="mb-4">
        <small>Phone</small>
        <h6> +(216) 50 53 85 11 / 54 99 50 20</h6>
      </div>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3197.556857559023!2d10.318073715142626!3d36.73320267996246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12fd49111fd069d1%3A0xbbdb8a49899e76c7!2sMagic+Way+Design!5e0!3m2!1sen!2stn!4v1554035114703!5m2!1sen!2stn"
        width="100%"
        height="400"
        frameBorder="0"
        style={{ border: '0' }}
        allowFullScreen
      />
    </div>
  );
};

export default Coordinates;
