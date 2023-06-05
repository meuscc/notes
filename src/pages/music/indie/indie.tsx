import { For } from "solid-js";

const tracks = [
  {
    name: "Radiohead - Creep",
    type: "youtube",
    youtube_id: "XFkzRNyygfk",
    artist: "Radiohead",
  },
  {
    name: "Twinbed - Trouble I'm In (Official Music Video)\n",
    type: "youtube",
    youtube_id: "MCtWx538Acw",
    artist: "Twinbed",
  },
  {
    name: "Still Corners - The Trip",
    type: "youtube",
    youtube_id: "Bhk7cjjLVXI",
  },
  {
    name: "Men I Trust -Shoulders",
    type: "youtube",
    youtube_id: "R17PlTKQeCg",
  },
  {
    name: "Radiohead - Creep",
    type: "youtube",
    youtube_id: "XFkzRNyygfk",
    artist: "Radiohead",
  },
  {
    name: "Blonde Redhead - GOLDEN LIGHT (Official Video)",
    type: "youtube",
    youtube_id: "SptdUuiKzOw",
    artist: "Blonde Redhead",
  },
  {
    name: "SENORITA but it's billie eilish vibes | KHS",
    type: "youtube",
    youtube_id: "KzpU7dnNrb0",
  },
  {
    name: "Anja Garbarek - Still Guarding Space",
    type: "youtube",
    youtube_id: "TBDJP0B19Qk",
    artist: "Anja Garbarek",
  },
  {
    name: "CLANN - Once Again",
    type: "youtube",
    youtube_id: "_C-aJfoUJ4Y",
    artist: "CLANN",
  },
  {
    name: "Rone - Bye Bye Macadam (Official Video)",
    type: "youtube",
    youtube_id: "kfoJUeyMsOE",
    artist: "Rone",
  },
  {
    name: "Princess Chelsea - Too Many People",
    type: "youtube",
    youtube_id: "Yj2Xq5W7ywc",
    artist: "Princess Chelsea",
  },
  {
    name: "Devics if we cannot see",
    type: "youtube",
    youtube_id: "P_kMlWNfBCQ",
    artist: "Devics",
  },
  {
    name: "Devics ~ In Your Room",
    type: "youtube",
    youtube_id: "c3METa2_F14",
    artist: "Devics",
  },
  {
    name: "Princess Chelsea - Caution Repetitive",
    type: "youtube",
    youtube_id: "i8yvj8QnZm8",
    artist: "Princess Chelsea",
  },
  {
    name: "Sleep Party People - I'm Not Human At All",
    type: "youtube",
    youtube_id: "aFUzvbkEvRk",
  },
  {
    name: "LORN - ANVIL [Official Music Video]",
    type: "youtube",
    youtube_id: "CqaAs_3azSs",
    artist: "LORN",
  },
  {
    name: "Princess Chelsea - Frack",
    type: "youtube",
    youtube_id: "ofdIoTU8wA4",
    artist: "Princess Chelsea",
  },
  {
    name: "Blonde Redhead - Misery Is A Butterfly",
    type: "youtube",
    youtube_id: "gP07_iaUwb4",
    artist: "Blonde Redhead",
  },
  {
    name: "Blonde Redhead - Misery Is A Butterfly",
    type: "youtube",
    youtube_id: "gP07_iaUwb4",
    artist: "Blonde Redhead",
  },
  {
    name: "Princess Chelsea - Ice Reign",
    type: "youtube",
    youtube_id: "YYGvFvvzlBI",
    artist: "Princess Chelsea",
  },
  {
    name: "Devics - City Lights",
    type: "youtube",
    youtube_id: "ZI8VQyuEm_Y",
    artist: "Devics",
  },
  {
    name: "Sóley - Pretty Face",
    type: "youtube",
    youtube_id: "ZI8VQyuEm_Y",
    artist: "Sóley",
  },
  {
    name: "Devics - City Lights",
    type: "youtube",
    youtube_id: "gRwFRMGpTWg",
    artist: "Devics",
  },
  {
    name: "Blonde Redhead - Dr. Strangeluv (Live HQ).",
    type: "youtube",
    youtube_id: "mJn9Acwn17Q",
    artist: "Blonde Redhead",
  },
  {
    name: "Blue Foundation - Sweep",
    type: "youtube",
    youtube_id: "aXA5YDpIj10",
    artist: "Blue Foundation",
  },
  {
    name: "The Cranberries - Zombie (Official Music Video)",
    type: "youtube",
    youtube_id: "6Ejga4kJUts",
    artist: "The Cranberries",
  },
  {
    name: "TONES AND I - DANCE MONKEY (OFFICIAL VIDEO)",
    type: "youtube",
    youtube_id: "q0hyYWKXF0Q",
    artist: "TONES AND I",
  },
  {
    name: "Phildel - Moonsea - The Disappearance of the Girl",
    type: "youtube",
    youtube_id: "EZVzMTt2UTk",
    artist: "Phildel",
  },
  {
    name: "Elephant Woman",
    type: "youtube",
    youtube_id: "SCMMZHlSQCQ",
    artist: "Blonde Redhead",
  },
  {
    name: "Untitled 27",
    type: "youtube",
    youtube_id: "wJzTErUG-_M",
    artist: "Untitled",
  },
  {
    name: "Weeping Willow",
    type: "youtube",
    youtube_id: "a9ShtkY7CCY",
    artist: "",
  },
  {
    name: "The Raveonettes - Curse the Night",
    type: "youtube",
    youtube_id: "gemKsn4cJCU",
    artist: "The Raveonettes",
  },
  {
    name: "劉昊霖- Landing Guy",
    type: "youtube",
    youtube_id: "IBnHUcWz8II",
    artist: "劉昊霖",
  },
];

export default function Indie() {
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
