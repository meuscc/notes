import { For } from "solid-js";

const tracks = [
  {
    name: "Shawn Lee ft Bei Bei - The Master Room",
    type: "youtube",
    youtube_id: "Y5XLjqQ1-6c",
    artist: "Bei Bei",
  },
  {
    name: "传琦SAMA Too Late ❄ 80s Japanese Bounce Vibe",
    type: "youtube",
    youtube_id: "B_2qN4ebm90",
    artist: "传琦SAMA",
  },
];

export default function Electric() {
  return (
    <div style={{ display: "flex", "flex-wrap": "wrap" }}>
      Indie
      <For each={tracks}>
        {(track) => (
          <div class="bg-#3399ff22 m-4px rd-20px p-16px">
            <h4>{track.name}</h4>
            <div>
              <iframe
                width="240"
                height="160"
                src={`https://www.youtube.com/embed/${track.youtube_id}`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        )}
      </For>
    </div>
  );
}
