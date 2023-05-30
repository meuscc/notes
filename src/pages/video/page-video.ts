import { LitElement, html, css } from "lit";

// const youtubeVideoLinks = ["https://www.youtube.com/watch?v=XFkzRNyygfk"];

const ws = new WebSocket("ws://localhost:1987");

ws.onopen = () => {
  ws.send("niasfs ");
};

ws.onmessage = (message) => {
  console.log(message.data);
};

export class PageVideo extends LitElement {
  async handleSend() {
    ws.send("1111");
  }

  render() {
    return html`
      <div>
        这里是我喜欢的视频哈
        <button @click="${this.handleSend}">发送</button>
        <slot></slot>
      </div>
    `;
  }

  static styles = css``;
}

customElements.define("page-video", PageVideo);
