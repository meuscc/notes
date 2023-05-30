import { LitElement, html, css } from "lit";

export class PageRust extends LitElement {
  render() {
    return html` <div>rust</div> `;
  }

  static styles = css``;
}

customElements.define("page-rust", PageRust);
