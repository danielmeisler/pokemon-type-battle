import { LitElement, css, html } from "lit";

class Layout extends LitElement {
	static styles = css`
    .layout {
      width: 100dvw;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .header {
      width: 100%;
      height: 10%;
      padding: 10px;
      box-sizing: border-box;
    }

    .button-grid {
      width: 30%;
      height: 30%;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }
  `;

	render() {
		return html`
      <div class="layout">
        <div class="header">
          <ptb-logo></ptb-logo>
        </div>

        <div class="button-grid">
          <ptb-button>0x</ptb-button>
          <ptb-button>1/4x</ptb-button>
          <ptb-button>1/2x</ptb-button>
          <ptb-button>1x</ptb-button>
          <ptb-button>2x</ptb-button>
          <ptb-button>4x</ptb-button>
        </div>

      </div>
    `;
	}
}

customElements.define("ptb-layout", Layout);
