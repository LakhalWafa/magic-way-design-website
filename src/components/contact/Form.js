import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';

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

const db = firebase.firestore();

class Form extends Component {
  state = {
    clientName: '',
    mail: '',
    msg: '',
    clientNameError: '',
    mailError: '',
    msgError: '',
    show: false
  };

  validate = () => {
    let clientNameError = '';
    let mailError = '';
    let msgError = '';

    if (
      !new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,15}/g).test(
        this.state.mail
      )
    ) {
      mailError = 'Invalid Email';
    } else if (!this.state.mail) {
      mailError = 'Email cannot be blank';
    }

    if (!this.state.clientName) {
      clientNameError = 'Name cannot be blank';
    } else if (/\d/.test(this.state.clientName)) {
      clientNameError = 'Name cannot contain a number';
    } else if (this.state.clientName.length < 3) {
      clientNameError = 'Name cannot be less than 3 characters';
    } else if (this.state.clientName.length > 15) {
      clientNameError = 'Name cannot be more than 15 characters';
    }

    if (!this.state.msg) {
      msgError = 'Message cannot be blank';
    } else if (this.state.msg.length < 8) {
      msgError = 'Message cannot be less than 8 characters';
    }

    if (
      this.state.msg === '' &&
      this.state.clientName === '' &&
      this.state.mail === ''
    ) {
      this.setState({ show: true });
    }

    if (mailError || clientNameError || msgError) {
      this.setState({ mailError, clientNameError, msgError });
      return false;
    }
    return true;
  };

  showAlert = () => {
    this.setState({ show: true });
  };

  closeAlert = e => {
    e.preventDefault();
    this.setState({ show: false });
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      const { clientName, mail, msg } = this.state;
      db.collection('Messages')
        .add({
          name: clientName,
          email: mail,
          msg: msg
        })
        .then(function(docRef) {
          console.log('Document written with ID: ', docRef.id);
        })
        .catch(function(error) {
          console.error('Error adding document: ', error);
        });
      this.setState({
        clientName: '',
        mail: '',
        msg: '',
        clientNameError: '',
        mailError: '',
        msgError: '',
        show: false
      });
    } else {
      this.showAlert();
    }
  };
  render() {
    return (
      <div className="container" style={{ marginTop: '10%' }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Votre Nom</label>
            <input
              value={this.state.clientName}
              name="clientName"
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
            <div style={{ color: '#ffb3b3' }}>
              <p> {this.state.clientNameError} </p>
            </div>
          </div>
          <div className="form-group">
            <label>Votre Email</label>
            <input
              value={this.state.mail}
              name="mail"
              type="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <div style={{ color: '#ffb3b3' }}>
              <p> {this.state.mailError} </p>
            </div>
          </div>
          <div className="form-group">
            <label>Votre Message</label>
            <textarea
              value={this.state.msg}
              name="msg"
              className="form-control"
              rows="3"
              onChange={this.handleChange}
            />
            <div style={{ color: '#ffb3b3' }}>
              <p> {this.state.msgError} </p>
            </div>
          </div>
          <button type="submit" className="btn btn-outline-light btn-block">
            Envoyer
          </button>
          {this.state.show ? (
            <div
              className="alert alert-danger alert-dismissible fade show mt-4"
              role="alert"
            >
              <strong>Form Filds Required!</strong> You should fill the fields.
              <button
                type="button"
                className="close"
                data-dismiss="alert"
                aria-label="Close"
                onClick={this.closeAlert}
              >
                x
              </button>
            </div>
          ) : null}
        </form>
      </div>
    );
  }
}

export default Form;
