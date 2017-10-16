import { ToastContainer } from 'react-toastify';
import React from 'react';
import Header from './Header';
import Game from './Game';
import ContactForm from './ContactForm';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div>
      <ToastContainer 
        position="top-right"
        type="default"
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
      />
      <Header />
      <Game />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default HomePage;
