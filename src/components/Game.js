import React, {Component}from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

/*
It was ment to help you in sorting the information to the database.
If sorting = 3 then the visitor should be sorten as a possible customer.
If = 1 then he's probably not easy to make a customer
*/

// let sorting;
// let service;

class Game extends Component {
  static propTypes = {
    checkToShowContactForm: PropTypes.func
  }

  constructor() {
    super();
  }

  componentDidMount() {
    /*
    $('#btnClick1, #btnClick2, #btnClick3').click(() => {
      let id = this.id;
      if (id == 'btnClick1') {
        sorting = 2;
      } else if (id == 'btnClick2') {
        sorting = 1;
      } else {
        sorting = 3;
      }
      // console.log(sorting);
    });
    
    $('#btnClick4, #btnClick5, #btnClick6, #btnClick7').click(() => {
      let id = this.id;
      if (id == 'btnClick4') {
        service = 1;
      } else if (id == 'btnClick5') {
        service = 2;
      } else if (this.id == 'btnClick6') {
        service = 3;
      } else {
        service = 4;
      }
      // console.log(service);
    });
    */
    
    //Shows first popup when any answer is chosen:
    $('.gamebtn').click(() => {
      if ($('#answers1').css('display') != 'none') {
        $('#popup1').show();
        $('#answers1').hide();
        $('.gameright').css({
          "background-color": "#506a85"
        });
        $('.nextbtn').fadeIn(1500).show();
      }
    });
    
    //Shows second popup when any answer is chosen:  
    $('.gamebtn').click(() => {
      if ($('#answers2').css('display') != 'none') {
        $('#popup2').show();
        $('#answers2').hide();
        $('.gameright').css({
          "background-color": "#506a85"
        });
        $('.nextbtn').fadeIn(1500).show();
      }
    });
    
    //What happens when clicking on the next (seuravaa) button:  
    $('.nextbtn').click(() => {
      if ($('#popup1').css('display') != 'none') {
        $('#answers2').show();
        $('#popup1').hide();
        $('#quest1').hide();
        $('#quest2').fadeIn(600).show();
        $('.nextbtn').fadeIn(1500).hide();
        $('.gameright').css({
          "background-color": "#1b998b"
        });
      } else if ($('#popup2').css('display') != 'none') {
        this.props.checkToShowContactForm();
        $('#form').fadeIn(1000).show();
        $('html, body').animate({
          scrollTop: $("#form").offset().top
        }, 400);
      }
    });
  }

  render() {
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
          <div id="quest1" className="col-md-3 col-md-offset-3 col-sm-6 gameleft">
            <div className="centergame">	
              <p>Koneesi ei käynnisty, ja takuu on umpeutunut.</p>
              <h3>MITÄ TEET?</h3>
              <p><img src="images/laptop.png"/></p>
            </div>
          </div>
          
          <div id="answers1" className="col-md-3 col-sm-6 gameright">
            <div id="btnClick1" className="row gamebtn"> Viet sen myymälään mistä ostit sen </div>
            <div id="btnClick2" className="row gamebtn"> Korjaat koneen itse! </div>
            <div id="btnClick3" className="row gamebtn"> Viet koneen lähimpään korjauspajaan. </div>
          </div>
          
          <div id="popup1" className="col-md-3 col-sm-6 gameright popupmb">
            <div className="center-text c-l-mb">
              <h2>Tiesitkö?</h2>
              <p>TietoLeppä tarkistaa laitteesi maksutta, 6kk huoltotakuulla.</p>
            </div>
            <div className="nextbtn">
              <button type="button" className="btn btn-default btn-block gbtn">Seuraava</button>
            </div>
          </div>
        
          <div id="quest2" className="col-md-3 col-md-offset-3 col-sm-6 gameleft">
            <div className="centergame">	
              <p>Millaisista palveluista olet eniten kiinnostunut?</p>
              <h3>Valitse yksi vaihtoehto</h3>
              <p><img src="images/tool.png" /></p>
            </div>
          </div>
          
          <div id="answers2" className="col-md-3 col-sm-6 gameright">
            <div id="btnClick4" className="row gamebtn"> Tietokonehuolto </div>
            <div id="btnClick5" className="row gamebtn"> IT-Tuesta</div>
            <div id="btnClick6" className="row gamebtn"> Konsultoinnista </div>
            <div id="btnClick7" className="row gamebtn"> Kaikista yllä mainituista </div>
          </div>
          
          <div id="popup2" className="col-md-3 col-sm-6 gameright popupmb">
            <div className="center-text c-l-mb">
              <h2>Tiesitkö?</h2>
              <p>TietoLeppä tarjoaa tietokonehuoltoa, tuki- ja asennuspalveluita ja yrityspalveluita</p>
            </div>
            
            <div className="nextbtn">
              <button type="button" className="btn btn-default btn-block gbtn">Osallistu arvontaan</button>
            </div>
          </div>
        </div>
      </main>
    );
  }
}  

export default Game;
