import React, {Component} from 'react';
import Header from './Header';
import Game from './Game';
import ContactForm from './ContactForm';
import Footer from './Footer';

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      showContactForm: false
    };
  }

  checkToShowContactForm = () => {
    this.setState({
      showContactForm: true
    });
  }

  render() {
    const {showContactForm} = this.state;
    return (
      <div>
        <Header />
        <Game checkToShowContactForm={this.checkToShowContactForm} />
        {showContactForm && <ContactForm />}
        <Footer />
      </div>
    );
  }
}

export default HomePage;
