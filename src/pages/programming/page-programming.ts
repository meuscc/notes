import { LitElement, html, css } from "lit";

export class PageProgramming extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

  static styles = css``;
}

customElements.define("page-programming", PageProgramming);
