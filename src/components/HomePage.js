import React, {Component} from 'react';
import $ from 'jquery';
import Header from './Header';
import Game from './Game';
import ContactForm from './ContactForm';
import Footer from './Footer';
import Popup from './Popup';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showContactForm: false,
      popupShowed: false
    };
  }

  checkToShowContactForm = () => {
    this.setState({
      showContactForm: true
    });
  }

  handleOnMouseLeave = () => {
    $('#popupModal').modal('show');
  }

  render() {
    const {showContactForm} = this.state;
    return (
      <div
        onMouseLeave={this.handleOnMouseLeave}>
        <Header />
        <Game checkToShowContactForm={this.checkToShowContactForm} />
        {showContactForm && <ContactForm />}
        <Footer />
        <Popup />
      </div>
    );
  }
}

export default HomePage;
