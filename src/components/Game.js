import React, {Component}from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

let answers = "#answers";
let popup = "#popup";
let quest = "#quest";
let chosendevice;
let n = parseInt("1");
let x = n;

let sorting;
let service;
let platform;

class Game extends Component {
  static propTypes = {
    checkToShowContactForm: PropTypes.func
  }

  constructor() {
    super();
  }

  componentDidMount() {
    //Shows next popup:
    $('.gamebtn, #apple, #windows, #other').click(event => {
      chosendevice = event.target.id;
      if (n >= 3) {
        $(popup + n).show();
        $(quest + n).hide();
        $(answers + n).hide();
        $('.gameright').css({"background-color":"#506a85"});
        n = n + 1;
        x = n - 1;
        finalText();
        form();
      }
      else if (answers + n == "#answers" + n) {
        $(popup + n).show();
        $(answers + n).hide();
        $('.gameright').css({"background-color":"#506a85"});
        $('.nextbtn').fadeIn(1500).show();
        n = n + 1;
        x = n - 1;
        next();
      }
    });

    //Shows next question and options:
    const next = () => {
      $('.nextbtn').click(() => {
        $(answers + n).show();
        $(popup + x).hide();
        $(quest + x).hide();
        $(quest + n).fadeIn(600).show();
        $('.nextbtn').hide();
        $('.gameright').css({"background-color":"#1b998b"});
      });
    };

    //Checks which device has been chosen and creates text according to that to the last "popup"
    const finalText = () => {
      let $div = $('#t');
      let $h2 = $div.find('h2');
      let $p1 = $div.find('p:first');
      let $p2 = $div.find('p:last');
      if (chosendevice == "apple"){
        $h2.text("Apple tuotteet ovat todella varmoja!");
        $p1.text("valitettavsti nekin voivat hajota.. Mutta ei hätää! Me TietoLepällä korjaamme myös apple koneita");
        $p2.text("Olet melkein valmis, täytä vain alla oleva lomake ja osallistu arvontaan!");
      }
      else if (chosendevice == "windows") {
        $h2.text("Windows laitteet ovat erikoisuutemme!");
        $p1.text("Silloin tällöin koneiden kanssa on ongelmia, tuo meille niin korjaamme asian!");
        $p2.text("Olet melkein valmis, täytä vain alla oleva lomake ja osallistu arvontaan!");
      }
      else {
        $h2.text("Käyttöjärjestelmästä riippumatta");
        $p1.text("Hoidamme laitteiston kuntoon!");
        $p2.text("Olet melkein valmis, täytä vain alla oleva lomake ja osallistu arvontaan!");
      }
    };

    //Is called upon when the last "popup" is shown.
    const form = () => {
      $('#form').fadeIn(1000).show();
      $('.popupmb').css({"height":"37em"});
      $('.more-button:last').css({"height":"100px", "bottom":"-50px"});
      $('#toformBtn').click(() => {
        this.props.checkToShowContactForm({sorting, service, platform});
        $('html, body').animate({scrollTop: $("#form").offset().top}, 400);
      });
    };

    /* This script saves information depending on the options the players chooses.
    The variables used are sorting, service and device. Here they are explained:
    sorting: holds information of how possible future customer the user is. The bigger the value, the more possible future customer the player is.

    service: has information about which service the player is interested in.

    device: stores information about what device the player prefers.
    */


    $('.gamebtn, .imgcomp').click(() => {
      interestInService();
    });

    $('#btnClick1, #btnClick2, #btnClick3').click(event => {
      const a = event.target.id;
      if(a == 'btnClick1'){
        sorting = 1;
      }
      else if(a == 'btnClick2'){
        sorting = 2;
      }
      else {
        sorting = 5;
      }
    });


    const interestInService = () => {
      $('#btnClick4, #btnClick5, #btnClick6, #btnClick7').click(event => {
        const b = event.target.id;
        if (b == 'btnClick4') {
          service = "huolto";
        }
        else if (b == 'btnClick5') {
          service = "tuki";
        }
        else if (b == 'btnClick6') {
          service = "konsultointi";
        }
        else {
          service = "kaikki";
        }
      });
    };

    $('#apple, #windows, #other').click(event => {
      const c = event.target.id;
      if (c === 'apple') {
        platform = "mac";
      }
      else if (c === 'windows') {
        platform = "windows";
      }
      else {
        platform = "other";
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
          <div id="quest1" className="col-md-4 col-md-offset-2 col-sm-6 gameleft">
            <div className="centergame">
              <p>Koneesi ei käynnisty, ja takuu on umpeutunut.</p>
              <h3>MITÄ TEET?</h3>
              <p><img src="images/laptop.png"/></p>
            </div>
          </div>

          <div id="answers1" className="col-md-4 col-sm-6 gameright">
            <div id="btnClick1" className="row gamebtn"> Viet sen myymälään mistä ostit sen </div>
            <div id="btnClick2" className="row gamebtn"> Korjaat koneen itse! </div>
            <div id="btnClick3" className="row gamebtn"> Viet koneen lähimpään korjauspajaan. </div>
          </div>

          <div id="popup1" className="col-md-4 col-sm-6 gameright popupmb">
            <div className="center-text c-l-mb">
              <h2>Tiesitkö?</h2>
              <p>TietoLeppä tarkistaa laitteesi maksutta, 6kk huoltotakuulla.</p>
            </div>
            <div className="nextbtn">
              <button type="button" className="btn btn-default btn-block gbtn">Jatka</button>
            </div>
          </div>

          <div id="quest2" className="col-md-4 col-md-offset-2 col-sm-6 gameleft">
            <div className="centergame">
              <p>Millaisista palveluista olet eniten kiinnostunut?</p>
              <h3>Valitse yksi vaihtoehto</h3>
              <p><img src="images/tool.png" /></p>
            </div>
          </div>

          <div id="answers2" className="col-md-4 col-sm-6 gameright">
            <div id="btnClick4" className="row gamebtn"> Tietokonehuolto </div>
            <div id="btnClick5" className="row gamebtn"> IT-Tuesta</div>
            <div id="btnClick6" className="row gamebtn"> Konsultoinnista </div>
            <div id="btnClick7" className="row gamebtn"> Kaikista yllä mainituista </div>
          </div>

          <div id="popup2" className="col-md-4 col-sm-6 gameright popupmb">
            <div className="center-text c-l-mb">
              <h2>Tiesitkö?</h2>
              <p>TietoLeppä tarjoaa tietokonehuoltoa, tuki- ja asennuspalveluita sekä yrityspalveluita</p>
            </div>

            <div className="nextbtn">
              <button type="button" className="btn btn-default btn-block gbtn">Jatka</button>
            </div>
          </div>

          <div id="quest3" className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 gameleft">
            <div className="centertext">
              <p>Mitä laitetta käytät eniten?</p>
              <h3>Valitse yksi vaihtoehto</h3>
              <p><img src="images/smiley.png" className="imgcenter" /></p>
            </div>
          </div>

          <div id="answers3" className="col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 gameleft">
              <img id="apple" src="images/mac.png" className="imgcomp imgleft" />
              <img id="windows" src="images/windows.png" className="imgcomp imgright" />
              <img id="other" src="images/other.png" className="imgcomp imgbetween" />
          </div>

          <div id="popup3" className="col-md-8 col-md-offset-2 col-sm-12 gameright popupmb">
            <div id="t" className="center-text c-l-mb">
              <h2></h2>
              <p></p>
              <p></p>
            </div>

            <div id="toformBtn" className="more-button">
              <div>
              <p>Lomakkeeseen</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    );
  }
}

export default Game;
