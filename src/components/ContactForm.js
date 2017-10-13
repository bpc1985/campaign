import React from 'react';

const ContactForm = () => {
  return (
    <section id="form" className="container-fluid">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
              <h2>Täytä vielä yhteystietosi ja osallistu arvontaan</h2>
              <div>
                <form name="form">
                  <div className="text-field">
                    <input type="text" name="name" placeholder="Nimi" />
                  </div>
                  <div className="text-field">
                    <input type="text" name="email" placeholder="Sähköposti" />
                  </div>
                  <div className="text-field">
                    <input type="text" name="phone" placeholder="Puhelinnumero" />
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
};

export default ContactForm;
