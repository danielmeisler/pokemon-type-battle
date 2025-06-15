import { LitElement, css, html } from "lit";

class Logo extends LitElement {
	static styles = css`
    .logo-container {
      height: 100%;
      width: 100%;
    }

    img {
      height: 100%;
      width: 100%;
    }
  `;

	render() {
		return html`
      <div class="logo-container">
        <img src="/assets/app/logo.svg">
      </div>
    `;
	}
}

customElements.define("ptb-logo", Logo);
