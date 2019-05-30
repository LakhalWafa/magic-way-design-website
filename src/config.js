import firebase from 'firebase/app';


const Config = {
  apiKey: 'AIzaSyDvH8VScez1WciS9q0RZQCK5cs47I3wsmo',
  authDomain: 'magic-way-design.firebaseapp.com',
  databaseURL: 'https://magic-way-design.firebaseio.com',
  projectId: 'magic-way-design',
  storageBucket: 'magic-way-design.appspot.com',
  messagingSenderId: '481231562508',
  appId: '1:481231562508:web:a221b23bda8264f1'
};

firebase.initializeApp(Config);

export default firebase