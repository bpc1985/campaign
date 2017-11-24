import React from 'react';

const ThanksPage = () => {
  return (
      <header id="header">
        <div className="inner">
          <div className="container">
              <div className="row">
                <div className="center-text thankyou-content col-xs-12">
                  <h1>Kiitos osallistumisestasi!</h1>
                  <p>Allaolevasta linkistä pääset TietoLepän viralliselle sivustolle</p>
                  <p>
                    <a className="logo-link white" href="http://www.tietoleppa.fi" target="_blank">
                      <img src="images/favicon-96x96_white.png" alt="tietoleppä logo icon" />
                      <b>Tietoleppä.fi</b>
                    </a>
                  </p>
                  <p>
                    <a className="icon-link white" href="http://kampanja.tietoleppa.fi/">
                      <i className="fa fa-chevron-left" aria-hidden="true" />&nbsp;&nbsp;Takaisin kampanjaan
                    </a>
                  </p>
                </div>
              </div>
          </div>
        </div>
    </header>
  );
};

export default ThanksPage;
