import { LitElement, html, css, unsafeCSS } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'
import style from 'katex/dist/katex.min.css'

declare var katex: any

const katexStyle = css`
  ${unsafeCSS(style)}
`

@customElement('m-b')
export class math extends LitElement {
  static styles = [
    katexStyle,
    css`
      :host {
        display: block;
      }
    `,
  ]

  @property()
  m: string = ''

  render() {
    return html`${unsafeHTML(
      katex.renderToString(this.m, {
        throwOnError: false,
        displayMode: true,
      }),
    )}`
  }
}

@customElement('m-i')
export class Math extends LitElement {
  static styles = [
    katexStyle,
    css`
      :host {
        display: inline-block;
      }
    `,
  ]

  @property()
  m: string = ''

  render() {
    return html`${unsafeHTML(
      katex.renderToString(this.m, {
        throwOnError: false,
        displayMode: false,
      }),
    )}`
  }
}
