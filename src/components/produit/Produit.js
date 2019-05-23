import React from 'react';
import slideone from './slideshow1.png';
import slidetwo from './slideshow2.png';
import slidethree from './slideshow3.png';
import slidefour from './slideshow4.png';
import slidefive from './slideshow5.png';
import slidesix from './slideshow6.png';

const Produit = () => {
  return (
    <div id="produit">
      <div className="bg-primary">
        <h1 className="text-center py-4 mb-0" style={{ color: 'white' }}>
          Our Gallery
        </h1>
      </div>
      <div className="bg-dark pt-5 pb-5 mt-0">
        <div className="container">
          <div
            id="carouselExampleIndicators"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleIndicators" data-slide-to="1" />
              <li data-target="#carouselExampleIndicators" data-slide-to="2" />
              <li data-target="#carouselExampleIndicators" data-slide-to="3" />
              <li data-target="#carouselExampleIndicators" data-slide-to="4" />
              <li data-target="#carouselExampleIndicators" data-slide-to="5" />
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={slideone} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidetwo} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidethree} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidefour} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidefive} className="d-block w-100" alt="..." />
              </div>
              <div className="carousel-item">
                <img src={slidesix} className="d-block w-100" alt="..." />
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Produit;
