import { LitElement, html, css } from "lit";

export class PageLogin extends LitElement {
  render() {
    return html` <div>登录</div> `;
  }

  static styles = css``;
}

customElements.define("page-login", PageLogin);
