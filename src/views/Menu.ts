import { LitElement, css, html } from 'lit';

class Menu extends LitElement {
	static styles = css`

  `;

	render() {
		return html`
      <ptb-layout>
        <div class="menu">

        </div>
      </ptb-layout>
    `;
	}
}

customElements.define('ptb-view-menu', Menu);
