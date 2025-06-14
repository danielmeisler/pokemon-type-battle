import { LitElement, css, html } from "lit";

class App extends LitElement {
	static styles = css`

	`;

	render() {
		return html`
			<div class="app"></div>
		`;
	}
}

customElements.define("ptb-app", App);
