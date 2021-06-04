import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

@customElement('u-btn')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
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
    return html`<p>Hello, ${this.name} ${this.count}</p>
      <button @click="${this.handleClick}">Click</button>`
  }
}
