import React from 'react';
import Form from './Form.js';
import Coordinates from './Coordinates.js';

const Contact = () => {
  return (
    <div id="contact" className="  bg-primary">
      <div className="container">
        <h1 className="text-center py-4 text-white mb-0"> Contact Us</h1>
        <div className="row bg-dark text-white">
          <div className="col-sm">
            <Form />
          </div>
          <div className="col-sm">
            <Coordinates />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
