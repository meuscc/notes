import { LitElement, html, css } from "lit";

export class PageRust extends LitElement {
  render() {
    return html` <div>集合论</div> `;
  }

  static styles = css``;
}

customElements.define("page-rust", PageRust);
