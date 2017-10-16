import React, {Component} from 'react';
import firebase from '../firebase';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const initialState = {
  name: '',
  email: '',
  phone: ''
};

class ContactForm extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  clearContactForm = () => {
    this.setState(initialState);    
    toast.info("We have received your contact information", {
      position: toast.POSITION.TOP_RIGHT,
      className: 'dark-toast',
      progressClassName: 'transparent-progress'
    });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const contactsRef = firebase.database().ref('contacts');
    const userInfo = {
      name: this.state.name,
      email: this.state.email,
      phone: this.state.phone
    };
    contactsRef.push(userInfo);
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
                      <input type="checkbox" name="checkbox" id="cb" />
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

export default ContactForm;
