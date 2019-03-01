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
          width: 100%;
          display: flex;
          flex-direction: column;
          flex: 1 1 auto;
        }
        paper-card {
          text-align: center;
        }
        .radio-content {
          text-align: right;
          padding-right: 20px;
          padding-bottom: 15px;
        }
        .card-content {
          text-align: left;
        }
        .button {
          width: 100%;
        }
      </style>
        <paper-card heading="youTube">
        <div class="card-content">
          <paper-input label="youTube Link"></paper-input>
        </div>
        <div class="card-content">
          <paper-textarea label="account:password"></paper-textarea>
        </div>
        <div class="radio-content">
          <paper-radio-group selected="Like">
            <paper-radio-button name="Like">Like</paper-radio-button>
            <paper-radio-button name="Dislike">Dislike</paper-radio-button>
          </paper-radio-group>
        </div>
        <div class="card-actions">
          <paper-button class="button">Activate</paper-button>
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
}

window.customElements.define('youtube-app', YoutubeApp);
