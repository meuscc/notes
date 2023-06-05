import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("h-1")
export class H1 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h1>${this.innerHTML}</h1> `;
  }
}
@customElement("h-2")
export class H2 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h2>${this.innerHTML}</h1> `;
  }
}
@customElement("h-3")
export class H3 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h3>${this.innerHTML}</h3> `;
  }
}
@customElement("h-4")
export class H4 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h4>${this.innerHTML}</h4> `;
  }
}
@customElement("h-5")
export class H5 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h5>${this.innerHTML}</h5> `;
  }
}
@customElement("h-6")
export class H6 extends LitElement {
  static styles = [
    // language=css
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <h6>${this.innerHTML}</h6> `;
  }
}
