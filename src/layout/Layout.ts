import { LitElement, css, html } from 'lit';

class Layout extends LitElement {
	static styles = css`
    :host {
      --content-gap: 20px;
      --content-max-width: 400px;
    }

    .container {
      width: 100dvw;
      height: 100dvh;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
    }

    .layout {
      height: 100%;
      width: 100%;
      max-width: var(--content-max-width);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
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
    <div class="container">
      <div class="layout">
        <div class="header">
          <ptb-logo></ptb-logo>
        </div>
        
        <slot></slot>

        <div class="footer">
          Daniel Meisler
        </div>
      </div>
    </div>
    `;
	}
}

customElements.define('ptb-layout', Layout);
