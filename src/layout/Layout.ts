import { LitElement, css, html } from 'lit';

class Layout extends LitElement {
	static styles = css`
    :host {
      --content-gap: 20px;
    }

    .layout {
      width: 100dvw;
      height: 100dvh;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      box-sizing: border-box;
      gap: var(--content-gap);
    }

    .header {
      width: 100%;
      height: 100px;
      padding: 10px;
      box-sizing: border-box;
    }

    .footer {
      width: 100%;
      height: 50px;
      padding: 10px;
      box-sizing: border-box;  
    }
  `;

	render() {
		return html`
      <div class="layout">
        <div class="header">
          <ptb-logo></ptb-logo>
        </div>
        
        <slot></slot>

        <div class="footer">
          Daniel Meisler
        </div>
      </div>
    `;
	}
}

customElements.define('ptb-layout', Layout);
