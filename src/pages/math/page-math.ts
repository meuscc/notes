import { LitElement, html, css } from "lit";

export class PageMath extends LitElement {
  render() {
    return html`
      <div>
        <slot></slot>
      </div>
    `;
  }

  static styles = css``;
}

customElements.define("page-math", PageMath);
