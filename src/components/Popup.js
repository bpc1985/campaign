import React, {Component} from 'react';

class Popup extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="modal fade" id="popupModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h2>Älä mene vielä!</h2>
                    <p>Jos tilaat uutiskirjeemme, saat valitsemastasi palvelusta 15% alennusta!</p>
                    <form id="popupForm" name="popupForm">
                        <input type="email" name="email" placeholder="Sähköpostiosoitteesi" />
                        <input type="submit" name="submit" value="Lähetä" />
                    </form>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Popup;
