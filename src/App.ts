import { LitElement, css, html } from "lit";

class App extends LitElement {
	static styles = css`

	`;

	render() {
		return html`
			<ptb-layout></ptb-layout>
		`;
	}
}

customElements.define("ptb-app", App);
