import { LitElement, html, css } from "lit";

export class PageIndex extends LitElement {
  render() {
    return html`
      <div>
        我这个是首页哈
        <slot></slot>
      </div>
    `;
  }

  static styles = css``;
}

customElements.define("page-index", PageIndex);
