import React, { Component } from 'react';
import './gallery.css';
import firebase from '../../config';
import 'firebase/storage';

const storage = firebase.storage();
const storageRef = storage.ref();

class Gallery extends Component {
  state = {
    index: 0,
    urls: [],
    url: ''
  };

  componentWillMount = () => {
    for (let i = 1; i < 100; i++) {
      const imageRef = storageRef.child(`images/${i}.png`);

      imageRef
        .getDownloadURL()
        .then(url => {
          this.setState({ urls: this.state.urls.concat(url), url: url });
        })
        .catch(error => {
          switch (error.code) {
            case 'storage/object-not-found':
              console.log("File doesn't exist");
              break;

            case 'storage/unauthorized':
              console.log("User doesn't have permission to access the object");
              break;

            case 'storage/canceled':
              console.log('User canceled the upload');
              break;
            case 'storage/unknown':
              console.log(
                'Unknown error occurred, inspect the server response'
              );
              break;
            default:
              break;
          }
        });
    }
  };

  onClickNext = () => {
    if (this.state.index + 1 === this.state.urls.length) {
      this.setState({ index: 0 });
    } else {
      this.setState({ index: this.state.index + 1 });
    }
  };

  onClickPrev = () => {
    if (this.state.index - 1 === -1) {
      this.setState({ index: this.state.urls.length - 1 });
    } else {
      this.setState({ index: this.state.index - 1 });
    }
  };

  render() {
    const { urls, index } = this.state;
    console.log(urls);
    return (
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="numbertext text-white">
              {index + 1} / {urls.length}{' '}
            </div>
            <img src={urls[index]} className="w-100 h-100" alt="" />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="prev"
          onClick={this.onClickPrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleCaptions"
          role="button"
          data-slide="next"
          onClick={this.onClickNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Gallery;
