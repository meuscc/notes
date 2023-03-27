import { LitElement, html, css } from "lit";

export class PageCpp extends LitElement {
  render() {
    return html` <div>集合论</div> `;
  }

  static styles = css``;
}

customElements.define("page-cpp", PageCpp);
