import React, { Component } from 'react';

class Newsletter extends Component {
  state = {
    email: ''
  };
  handleChange = e => {
    const { value } = e.target;
    this.setState({
      email: value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.setState({
      email: ''
    });
  };
  render() {
    return (
      <div
        id="more"
        style={{
          marginBottom: '0',
          paddingBottom: '1%',
          paddingTop: '3%',
          color: 'white',
          background: 'rgb(194, 10, 111)'
        }}
      >
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <div className="form-row align-items-center" />
            <div className="form-group col-auto">
              <h3>Subscribe To Our Newsletter</h3>
            </div>
            <div className="form-group col-auto">
              <div className="d-flex">
                <input
                  value={this.state.email}
                  type="email"
                  className="form-control"
                  placeholder="Votre Adresse email..."
                  onChange={this.handleChange}
                />
                <button type="submit" className="btn btn-dark">
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Newsletter;
