import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'

import { sounds } from './data'

@customElement('page-index')
export class SimpleGreeting extends LitElement {
  static styles = css`
    :host {
      color: green;
    }
    .sounds-ctn {
      display: flex;
    }
    .sound-btn {
      background-color: cyan;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      cursor: pointer;
    }
    .sound-btn-active {
      background-color: green;
      color: #fff;
    }

    audio {
      display: none;
    }
  `

  // Declare reactive properties
  @property()
  name?: string = 'World'

  @property()
  currentSounds: Array<{ name: string; url: string }> = []

  handleClick(name: string) {
    console.log(name)
    const idx = this.currentSounds.findIndex(v => v.name === name)
    if (idx > -1) {
      this.currentSounds.splice(idx, 1)
      this.currentSounds = [...this.currentSounds]
    } else {
      this.currentSounds = [...this.currentSounds, sounds.find(s => s.name === name)!]
    }
  }

  // Render the UI as a function of component state
  render() {
    return html`
      <div class="sounds-ctn">
        ${sounds.map(
          s =>
            html`
              <div
                @click="${() => this.handleClick(s.name)}"
                class="sound-btn ${this.currentSounds.find(_s => _s.name === s.name)
                  ? 'sound-btn-active'
                  : ''}"
              >
                ${s.name}
              </div>
            `,
        )}
      </div>
      ${this.currentSounds.map(
        s =>
          html`
            <audio loop="loop" autoplay="autoplay" controls="controls" src="${s.url}"></audio>
          `,
      )}
    `
  }
}
