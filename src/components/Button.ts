import { LitElement, css, html } from "lit";
import { property } from "lit/decorators.js";

class Button extends LitElement {
	static styles = css`
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
        background-color: #2A2A2A;
        border-radius: 2vh;
      }
    }

    button {
      width: 100%;
      height: 90%;
      position: relative;
      background-color: white;
      cursor: pointer;
      border: none;
      padding: 0;
      font: inherit;
      cursor: pointer;
      outline: inherit;
      border: 3px solid #2A2A2A;
      border-radius: 2vh;
      transform: translateY(0);
      transition: transform 0.1s ease-in-out;

      &:active {
        transform: translateY(10%);
      }
    }
  `;

	@property() direction: "upward" | "downward" = "upward";

	render() {
		return html`
      <div class="button-container">
        <button>
          <slot></slot>
        </button>
      </div>
    `;
	}
}

customElements.define("ptb-button", Button);
