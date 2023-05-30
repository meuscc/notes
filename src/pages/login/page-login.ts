import { LitElement, html, css } from "lit";

export class PageLogin extends LitElement {
  async handleLogin() {
    console.log(1);
  }

  render() {
    return html` <button @click="${this.handleLogin}">登录</button> `;
  }

  static styles = css``;
}

customElements.define("page-login", PageLogin);
