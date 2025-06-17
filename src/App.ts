import { LitElement, css, html } from 'lit';

class App extends LitElement {
	static styles = css`

	`;

	render() {
		return html`
			<ptb-view-game></ptb-view-game>
		`;
	}
}

customElements.define('ptb-app', App);
