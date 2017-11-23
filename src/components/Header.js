import React from 'react';
import $ from 'jquery';

const Header = () => {
  const onClick = () => {
    $('html,body').animate({
      scrollTop: document.getElementById('header').clientHeight
    }, 400);
  };

  return (
    <header id="header">
      <div className="inner">

        <img className="speaker" src="images/kaiutin.png" />
        <div className="container">

          <div className="logo-row">
              <p><img src="images/tietoleppa_logo.png" className="main-logo" alt="tietoleppä logo" /></p>
          </div>

          <div className="row">
            <div className="center-text col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-12">
              <h1>Voihan pojat!</h1>
              <p>
                Lue miten IT-tiimillemme kävi ja osallistu huisin hauskan tietokoneen korjaus -seikkailun kautta JBL Charge 2 kaiuttimen arvontaan!
              </p>
            </div>
          </div>

          <div id="moreBtn" className="more-button" onClick={onClick}>
            <div>
              <p>Lue lisää</p>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
