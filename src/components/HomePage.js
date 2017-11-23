import React, {Component} from 'react';
// import $ from 'jquery';
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
      popupShowed: false,
      data: {
        sorting: null,
        service: null,
        platform: null
      }
    };
  }

  checkToShowContactForm = (choice) => {
    const {sorting, service, platform} = choice;
    this.setState({
      showContactForm: true,
      data: { sorting, service, platform }
    });
  }

  handleOnMouseLeave = () => {
    this.setState({popupShowed: true});
  }

  render() {
    const {showContactForm, popupShowed} = this.state;
    return (
      <div
        onMouseLeave={this.handleOnMouseLeave}>
        <Header />
        <Game checkToShowContactForm={this.checkToShowContactForm} />
        {showContactForm && <ContactForm data={this.state.data} />}
        <Footer />
        {popupShowed && <Popup />}
      </div>
    );
  }
}

export default HomePage;
