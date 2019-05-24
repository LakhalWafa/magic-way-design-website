import React, { Component } from 'react';
import Validator from 'validator';

class Form extends Component {
  state = {
    nom: '',
    mail: '',
    msg: '',
    formErrors: {
      nom: '',
      mail: '',
      msg: ''
    },
    show: false
  };

  validate = () => {
    const { nom, mail, msg, formErrors } = this.state;
    if (formErrors.nom || formErrors.mail || formErrors.msg) {
      return false;
    }
    if (nom === '' || mail === '' || msg === '') {
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
    const formErrors = { ...this.state.formErrors };
    switch (name) {
      case 'nom':
        formErrors.nom =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      case 'mail':
        formErrors.mail =
          !Validator.isEmail(value) || Validator.isEmpty(value)
            ? 'Invalid Email'
            : '';
        break;
      case 'msg':
        formErrors.msg =
          Validator.isEmpty(value) || !Validator.isAlpha(value)
            ? 'Field required'
            : '';
        break;
      default:
        break;
    }
    this.setState({
      [name]: value,
      formErrors
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      console.log(this.state);
      this.setState({
        nom: '',
        mail: '',
        msg: '',
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
            <label>Votre nom</label>
            <input
              value={this.state.nom}
              name="nom"
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="text-danger">
              <p>{this.state.nom === '' ? this.state.formErrors.nom : null}</p>
            </div>
          </div>
          <div className="form-group">
            <label>Votre email</label>
            <input
              value={this.state.mail}
              name="mail"
              type="email"
              className="form-control"
              onChange={this.handleChange}
            />
            <div className="text-danger">
              <p>
                {' '}
                {this.state.mail === ''
                  ? this.state.formErrors.mail
                  : null}{' '}
              </p>
            </div>
          </div>
          <div className="form-group">
            <label>Votre message</label>
            <textarea
              value={this.state.msg}
              name="msg"
              className="form-control"
              rows="3"
              onChange={this.handleChange}
            />
            <div className="text-danger">
              <p>
                {' '}
                {this.state.msg === '' ? this.state.formErrors.msg : null}{' '}
              </p>
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
