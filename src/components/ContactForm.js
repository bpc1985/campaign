import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import firebase from '../firebase';

const initialState = {
  newsletters: false,
  name: '',
  email: '',
  phone: ''
};

class ContactForm extends Component {
  static propTypes = {
    history: PropTypes.object.isRequired,
    data: PropTypes.object.isRequired
  }

  constructor() {
    super();
    this.state = initialState;
  }

  clearContactForm = () => {
    this.setState(initialState);
    this.props.history.push('/thankyou');
  }

  handleCheckbox = () => {
    this.setState({newsletters: !this.state.newsletters});
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {name, email, phone, newsletters} = this.state;
    const {sorting, service, platform} = this.props.data;
    const contactsRef = firebase.database().ref('contacts');
    const userInfo = {
      name, email, phone, sorting, service, platform, newsletters
    };
    contactsRef.push(userInfo);
    if (newsletters) {
      const newslettersRef = firebase.database().ref('newsletters');
      const newChildRef = newslettersRef.push();
      newChildRef.set(email);
    }
    this.clearContactForm();
  };

  render() {
    return (
      <section id="form" className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
                <h2>Täytä vielä yhteystietosi ja osallistu arvontaan</h2>
                <div>
                  <form name="form" onSubmit={this.handleSubmit}>
                    <div className="text-field">
                      <input
                        type="text"
                        name="name"
                        placeholder="Nimi"
                        onChange={this.handleChange}
                        value={this.state.name} />
                    </div>
                    <div className="text-field">
                      <input
                        type="text"
                        name="email"
                        placeholder="Sähköposti"
                        onChange={this.handleChange}
                        value={this.state.email} />
                    </div>
                    <div className="text-field">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Puhelinnumero"
                        onChange={this.handleChange}
                        value={this.state.phone} />
                    </div>
                    <div className="text-field">
                      <input
                        id="cb"
                        type="checkbox"
                        name="newsletters"
                        onChange={this.handleCheckbox}
                        checked={this.state.newsletters} />
                      <label id="cb1" htmlFor="cb">Kyllä, haluan vastaanottaa sähköpostiini TietoLepän ajoittain vaihtuvia tarjouksia ja vinkkejä uutiskirjeen muodossa</label>
                    </div>
                    <input type="submit" value="Lähetä" />
                  </form>
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(ContactForm);