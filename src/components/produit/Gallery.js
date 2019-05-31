import React, { Component } from 'react';
import './gallery.css';
import Carousel from './Carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import firebase from '../../config';
import 'firebase/storage';

const storage = firebase.storage();
const storageRef = storage.ref();

class Gallery extends Component {
  state = {
    urls: []
  };

  componentWillMount = () => {
    for (let i = 1; i < 100; i++) {
      const imageRef = storageRef.child(`images/${i}.png`);

      imageRef
        .getDownloadURL()
        .then(url => {
          this.setState({ urls: this.state.urls.concat(url) });
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

  render() {
    const { urls } = this.state;
    return (
      <div>
        <Carousel src={urls} />
      </div>
    );
  }
}

export default Gallery;
