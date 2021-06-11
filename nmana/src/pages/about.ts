import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('page-about')
export class SimpleGreeting extends LitElement {
  static styles = css`
    :host {
      color: green;
    }
  `

  // Declare reactive properties
  @property()
  name?: string = 'World'

  @property()
  count: number = 0

  handleClick() {
    this.count++
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <a href="/">到首页</a>
      <p>Hello, ${this.name} ${this.count}</p>
      <div>士大夫士大夫士大夫士大夫大师傅士大夫士大夫</div>
    `
  }
}
