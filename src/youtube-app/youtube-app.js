import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-input/paper-textarea.js';
import '@polymer/paper-radio-button/paper-radio-button.js';
import '@polymer/paper-radio-group/paper-radio-group.js';

/**
 * @customElement
 * @polymer
 */
class YoutubeApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          width: 80%;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
          margin: 0 auto;
        }
        paper-card {
          text-align: center;
          background-image: url(images/giphy3.gif);
          width: 100%;
        }

        .radio-content {
          text-align: right;
          padding-right: 20px;
          padding-bottom: 15px;
          background: white;
        }
        .card-actions {
          background: white;
        }
        .card-content {
          text-align: left;
          background: white;
        }
        .button {
          width: 100%;
        }
        .radio-icon {
          max-height: 45px;
          background: white;
        }
        .invert {
          filter: invert(100);
        }

      </style>
      <audio autoplay loop>
        <source src="/images/noise.mp3" type="audio/mpeg">
      </audio>
        <paper-card heading="youTubeZcliKZ0R">
        <img src="/images/giphy2.gif" />
        <div class="card-content">
          <paper-input label="youTubeZ Linkz0r" value="{{link}}"></paper-input>
        </div>
        <div class="card-content">
          <paper-textarea label="account:password" value="{{accinfo}}"></paper-textarea>
        </div>
        <div class="radio-content">
          <paper-radio-group selected="{{selected}}">
            <paper-radio-button name="Like"><img class="radio-icon" src="images/triforce.png" /></paper-radio-button>
            <paper-radio-button name="Dislike"><img class="radio-icon" src="images/radioactive.png" /></paper-radio-button>
          </paper-radio-group>
        </div>
        <div class="card-actions">
          <paper-button class="button" on-click="_fire"><img class="radio-icon invert" src="images/giphy.gif"></paper-button>
        </div>
        </paper-card>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'youtube-app'
      }
    };
  }
  _fire(){
    console.log(this.link, this.accinfo.split('\n'), this.selected);
    var arr = [];
    var accs = this.accinfo.split('\n');
    for (var i = 0; i < accs.length; i++) {
      var details = accs[i].split(':');
      arr.push({email: details[0], password: details[1]});
    }
    console.log(arr);
    const data = {
      link: this.link,
      logins: arr,
      radio: this.selected,
    };
    console.log(data);
    const url = 'http://localhost:9000/';
    fetch(url, {
     method: 'POST',
     body: JSON.stringify(data),
     headers: {'Content-Type': 'application/json'},
   })
       .then((response) => {
         console.log(response);
         return response.json();
       })
        .catch((err) => {
          console.log(err)
        })
  }
}

window.customElements.define('youtube-app', YoutubeApp);
