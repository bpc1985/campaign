import React from 'react';

const Game = () => {
  return (
    <main className="container">
      <div className="row">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <p>
            IT-tiimimme TietoLepällä päätti nostaa toimistomme tunnelmaa uusilla vedenkestävillä JBL Charge 3 -kaiuttimilla, mutta tilausprosessissa kävikin kömmähdys ja pöydällemme jäikin yksi kaiutin ylimääräiseksi.
          </p>
          <p>
            Päätimme tehdä onnen onnettomuudesta, ja pistää arvonnan pystyyn huisin hauskan kyselyn kautta.
          </p>
          <p>
            <b>Osallistu skabaan ja meidän toimistoakin koristava hieno JBL Charge 3 kaiutin voi olla sinun!</b>
          </p>
          <hr />
        </div>
      </div>

      <div className="row game">
        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2">
          <p>
            <img src="images/game-temp.jpg" />
          </p>
        </div>
      </div>
    </main>
  );
};

export default Game;
