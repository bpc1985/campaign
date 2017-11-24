import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import firebase from '../firebase';
import {FieldError} from './FieldError';

const initialState = {
  newsletters: false,
  name: '',
  email: '',
  phone: '',
  formErrors: {
    name: '',
    email: '',
    phone: ''
  },
  nameValid: false,
  emailValid: false,
  formValid: false
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
    const {name, value} = e.target;
    this.setState(
      {[name]: value},
      () => {this.validateField(name, value);}
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let nameValid = this.state.nameValid;
    let emailValid = this.state.emailValid;

    switch(fieldName) {
      case 'name':
        nameValid = value.length > 0;
        fieldValidationErrors.name = nameValid ? '': 'Tarkista että "Nimi" kenttä on täytetty';
        break;
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : 'Tarkista sähköpostiosoitteen muoto';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      nameValid: nameValid,
      emailValid: emailValid
    }, this.validateForm);
  }

  validateForm() {
    const {nameValid, emailValid} = this.state;
    this.setState({
      formValid: nameValid && emailValid
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.formValid) {
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
    }
  };

  errorClass(error) {
    return( error.length === 0 ? {} : {borderColor: 'red'});
  }

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
                        style={this.errorClass(this.state.formErrors.name)}
                        onChange={this.handleChange}
                        value={this.state.name} />
                      {<FieldError id={'nameError'} error={this.state.formErrors.name} />}
                    </div>
                    <div className="text-field">
                      <input
                        type="text"
                        name="email"
                        placeholder="Sähköposti"
                        style={this.errorClass(this.state.formErrors.email)}
                        onChange={this.handleChange}
                        value={this.state.email} />
                      <FieldError id={'emailError'} error={this.state.formErrors.email} />
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
                      <label id="cb1" htmlFor="cb">
                        Kyllä, haluan vastaanottaa sähköpostiini TietoLepän ajoittain vaihtuvia tarjouksia ja vinkkejä uutiskirjeen muodossa. Tilaamalla uutiskirjeen, saan myös -15% alennuksen valitsemastani palvelusta.
                      </label>
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