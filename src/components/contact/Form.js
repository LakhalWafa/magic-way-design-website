import React, { Component } from 'react';
import firebase from '../../config';
import 'firebase/firestore';


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
      mailError = 'Adresse mail invalide';
    } else if (!this.state.mail) {
      mailError = 'L\'adresse mail ne peut pas être vide';
    }

    if (!this.state.clientName) {
      clientNameError = 'Le nom ne peut pas être vide';
    } else if (/\d/.test(this.state.clientName)) {
      clientNameError = 'Le nom ne peut pas contenir de numéro';
    } else if (this.state.clientName.length < 3) {
      clientNameError = 'Le nom ne peut pas être inférieur à 3 caractères';
    }

    if (!this.state.msg) {
      msgError = 'Le message ne peut pas être vide';
    } else if (this.state.msg.length < 4) {
      msgError = 'Le message ne peut pas être inférieur à 4 caractères';
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
      db.collection('messages')
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
              <strong>Champs de formulaire requis!</strong> Vous devez remplir les champs et merci.
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
