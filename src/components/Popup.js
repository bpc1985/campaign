import React, {Component} from 'react';
import $ from 'jquery';
import firebase from '../firebase';

class Popup extends Component {
  constructor() {
    super();
    this.state = {
      email: ''
    };
  }

  componentDidMount() {
    $('#popupModal').modal('show');
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const {email} = this.state;
    const newslettersRef = firebase.database().ref('newsletters');
    const emailInfo = {email};
    newslettersRef.push(emailInfo);
    $('#popupModal').modal('toggle');
  };

  render() {
    return (
      <div className="modal fade" id="popupModal">
        <div className="modal-dialog">
            <div className="modal-content">
                <div className="modal-body">
                    <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    <h2>Älä mene vielä!</h2>
                    <p>Jos tilaat uutiskirjeemme, saat valitsemastasi palvelusta 15% alennusta!</p>
                    <form id="popupForm" name="popupForm" onSubmit={this.handleSubmit}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Sähköpostiosoitteesi"
                          onChange={this.handleChange}
                          value={this.state.email} />
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
