import { LitElement, css, html } from 'lit';
import { property } from 'lit/decorators.js';

export type ButtonState = 'neutral' | 'right' | 'wrong';

class Button extends LitElement {
	static styles = css`
    :host {
      --button-font: var(--font);
      --button-font-size: 2em;
      
      --font-color: #2A2A2A;
      --background-color: #ffffff;

      --anim-time: 0.1s;
    }

    .button-container {
      width: 100%;
      height: 100%;
      position: relative;

      &::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 50%;
        background-color: var(--shadow-color);
        border-radius: var(--ptb-border-radius);
      }
    }

    button {
      width: 100%;
      height: 90%;
      position: relative;
      background-color: var(--background-color);
      cursor: pointer;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      border: 3px solid var(--shadow-color);
      border-radius: var(--ptb-border-radius);
      transform: translateY(0);
      transition: transform var(--anim-time) ease-in-out;

      &:active {
        transform: translateY(10%);
      }
    }

    slot {
      font-family: var(--button-font);
      font-size: var(--button-font-size);
      color: var(--font-color);
    }
  `;

	@property() direction: 'upward' | 'downward' = 'upward';
	@property() state: ButtonState = 'neutral';

	getStateColor() {
		switch (this.state) {
			case 'right':
				return '#75d26a';
			case 'wrong':
				return '#b53232';
			default:
				return '#2A2A2A';
		}
	}

	render() {
		return html`
      <style>
        :host {
          --shadow-color: ${this.getStateColor()};
        }
      </style>
      <div class="button-container">
        <button>
          <slot></slot>
        </button>
      </div>
    `;
	}
}

customElements.define('ptb-button', Button);
