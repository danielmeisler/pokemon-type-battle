import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

class Field extends LitElement {
	static styles = css`
    :host {
      --background-color: rgba(255,255,255,0.1); 
      --border-color: rgba(255,255,255,0.1);
      --border-width: 5px;

      --center-size: 20%;
      --fist-size: 50%;

      --type-icon-circle-size: 60%;
      --type-icon-size: 70%;
      --type-icon-padding: 25px;

      --type-name-font-size: 2em;

      --shadow-color: #2A2A2A;
    }

    .field-container {
      height: 100%;
      width: 100%;
      position: relative;
      background-color: var(--background-color);
      border-radius: var(--ptb-border-radius);
      border: var(--border-width) solid var(--border-color);
      box-sizing: border-box;
    }

    .center {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
    }

    .attack-icon {
      height: var(--center-size);
      aspect-ratio: 1 / 1;
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        position: absolute;
        height: 100%;
        width: 100%;
      }

      .arrow {
        transform: rotate(0deg);
        animation: rotate 1s ease-in-out;
      }

      .fist {
        height: var(--fist-size);
        aspect-ratio: 1 / 1;
      }
    }

    @keyframes rotate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .defender {
      width: 100%;
      height: 50%;
      position: relative;

      .defender-type-icon {
        position: absolute;
        right: var(--type-icon-padding);
        top: var(--type-icon-padding);
        background-color: var(--defender-color);
        height: var(--type-icon-circle-size);
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: -10%;
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--shadow-color);
          border-radius: 100%;
          z-index: -1;
        }

        img {
          height: var(--type-icon-size);
          aspect-ratio: 1 / 1;
        }
      }

      .defender-type-name {
        position: absolute;
        left: var(--type-icon-padding);
        top: var(--type-icon-padding);
        font-size: var(--type-name-font-size);
        text-shadow: 0 0 5px var(--shadow-color);
      }
    }

    .attacker {
      width: 100%;
      height: 50%;
      position: relative;

      .attacker-type-icon {
        position: absolute;
        left: var(--type-icon-padding);
        bottom: calc(var(--type-icon-padding) + 5%);
        background-color: var(--attacker-color);
        height: var(--type-icon-circle-size);
        aspect-ratio: 1 / 1;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;

        &::before {
          content: '';
          position: absolute;
          bottom: -10%;
          width: 100%;
          aspect-ratio: 1/1;
          background-color: var(--shadow-color);
          border-radius: 100%;
          z-index: -1;
        }

        img {
          height: var(--type-icon-size);
          aspect-ratio: 1 / 1;
        }
      }

      .attacker-type-name {
        position: absolute;
        right: var(--type-icon-padding);
        bottom: var(--type-icon-padding);
        font-size: var(--type-name-font-size);
        text-shadow: 0 0 5px var(--shadow-color);
      }
    }
  `;

	@property({ attribute: 'attacker-color' }) attackerColor = '';
	@property({ attribute: 'attacker-icon' }) attackerIcon = '';
	@property({ attribute: 'attacker-type' }) attackerType = '';
	@property({ attribute: 'defender-color' }) defenderColor = '';
	@property({ attribute: 'defender-icon' }) defenderIcon = '';
	@property({ attribute: 'defender-type' }) defenderType = '';
	@property({ attribute: 'defender-color-duo' }) defenderColorDuo? = '';
	@property({ attribute: 'defender-icon-duo' }) defenderIconDuo? = '';
	@property({ attribute: 'defender-type-duo' }) defenderTypeDuo? = '';

	render() {
		return html`
    <style>
      :host {
        --attacker-color: ${this.attackerColor};
        --defender-color: ${this.defenderColor};
        --defender-color-duo: ${this.defenderColorDuo};
      }
    </style>
      <div class="field-container">

        <div class="center">
          <div class="attack-icon">
            <img class="arrow" src="/assets/icons/attack-arrow.svg">
            <img class="fist" src="/assets/icons/attack-fist.svg">
          </div>
        </div>

        <div class="defender">
          <div class="defender-type-icon">
            <img class="defender-type-icon-img" src="${this.defenderIcon}">
          </div>
          <div class="defender-type-name">
            ${this.defenderType}
          </div>
        </div>

        <div class="attacker">
          <div class="attacker-type-icon">
            <img class="attacker-type-icon-img" src="${this.attackerIcon}">
          </div>
          <div class="attacker-type-name">
            ${this.attackerType}
          </div>
        </div>

      </div>
    `;
	}
}

customElements.define('ptb-field', Field);
