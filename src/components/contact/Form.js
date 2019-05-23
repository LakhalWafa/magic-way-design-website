import React, { Component } from 'react';

class Form extends Component {
  state = {
    name: '',
    mail: '',
    subject: '',
    msg: ''
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      name: '',
      mail: '',
      subject: '',
      msg: ''
    });
  };
  render() {
    return (
      <div className="container" style={{ marginTop: '10%' }}>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Votre nom</label>
            <input
              value={this.state.name}
              name="name"
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
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
          </div>
          <div className="form-group">
            <label>Sujet</label>
            <input
              value={this.state.subject}
              type="text"
              name="subject"
              className="form-control"
              onChange={this.handleChange}
            />
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
          </div>
          <button type="submit" className="btn btn-outline-light btn-block">
            Envoyer
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
