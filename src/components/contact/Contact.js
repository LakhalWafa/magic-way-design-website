import React from 'react';
import Form from './Form.js';
import Coordinates from './Coordinates.js';

const Contact = () => {
  return (
    <div id="contact">
      <div className="bg-primary">
        <h1 className="text-center py-4 text-white mb-0"> Contactez nous</h1>
      </div>
      <div className="bg-dark">
        <div className="container">
          <div className="row text-white">
            <div className="col-sm">
              <Form />
            </div>
            <div className="col-sm">
              <Coordinates />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
