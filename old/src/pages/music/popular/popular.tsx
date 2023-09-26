import { For } from "solid-js";

const tracks = [
  {
    name: "Katy Perry - Dark Horse",
    type: "youtube",
    youtube_id: "mlW0NqbQC4U",
    artist: "Katy Perry ",
  },
  {
    name: "Hotel California (2013 Remaster)",
    type: "youtube",
    youtube_id: "BciS5krYL80",
    artist: "Hotel California (2013 Remaster) ",
  },
  {
    name: "Michael Jackson - Moonwalker",
    type: "youtube",
    youtube_id: "iCWS1gQSWWM",
    artist: "Michael Jackson",
  },
];

export default function Popular() {
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
