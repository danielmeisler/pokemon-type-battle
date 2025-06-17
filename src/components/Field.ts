import { LitElement, css, html } from 'lit';

class Field extends LitElement {
	static styles = css`
    :host {
      --background-color: rgba(255,255,255,0.1); 
      --border-color: rgba(255,255,255,0.1);
      --border-width: 5px;
    }

    .field-container {
      height: 100%;
      width: 100%;
      background-color: var(--background-color);
      border-radius: 2vh;
      border: var(--border-width) solid var(--border-color);
      box-sizing: border-box;
    }
  `;

	render() {
		return html`
      <div class="field-container">
        
      </div>
    `;
	}
}

customElements.define('ptb-field', Field);
