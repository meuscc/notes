import { For } from "solid-js";

const tracks = [
  {
    name: "凉凉",
    type: "youtube",
    youtube_id: "6lkuyDg4PaQ",
    artist: "三生三世十里桃花",
  },
  {
    name: "阿肆 (A Si) - 浮光掠影",
    type: "youtube",
    youtube_id: "N1PXiTVZ-Ag",
    artist: "阿肆",
  },
  {
    name: "天下无双 - 张靓颖",
    type: "youtube",
    youtube_id: "hqzPLhlnFLg",
    artist: "张靓颖",
  },
  {
    name: "乐园 - 蒋凡",
    type: "youtube",
    youtube_id: "sp1BEq3gq28",
    artist: "蒋凡",
  },
  {
    name: "乐园 - 与非门",
    type: "youtube",
    youtube_id: "YALj2eB2D0A",
    artist: "与非门",
  },
  {
    name: "刺猬乐队190629 《白日梦蓝》",
    type: "youtube",
    youtube_id: "00-A9IfuvXU",
    artist: "刺猬乐队",
  },
  {
    name: "Twins - 下一站天后",
    type: "youtube",
    youtube_id: "0D-xK8OooZE",
    artist: "Twins",
  },
  {
    name: "Twins - 下一站天后",
    type: "youtube",
    youtube_id: "cPKfUWDmNbo",
    artist: "Twins",
  },
  {
    name: "子不语 · 罗刹鸟",
    type: "youtube",
    youtube_id: "6eyiVWmWIwg",
    artist: "子不语",
  },
  {
    name: "鄭秀文 Sammi Cheng -《神奇女俠》",
    type: "youtube",
    youtube_id: "bOlowCHjAZw",
    artist: "鄭秀文",
  },
  {
    name: "黑蝙蝠中队 刘德华",
    type: "youtube",
    youtube_id: "B84Hhh5NPgo",
    artist: "刘德华",
  },
  {
    name: "周杰倫 Jay Chou以父之名",
    type: "youtube",
    youtube_id: "9q7JOQfcJQM",
    artist: "周杰倫",
  },
  {
    name: "蔡依林 Jolin Tsai - 倒帶",
    type: "youtube",
    youtube_id: "cB7DIIG0ykk",
    artist: "蔡依林",
  },
  {
    name: "滥俗的歌",
    type: "youtube",
    youtube_id: "WnnkcPfOvMs",
    artist: "汉堡黄",
  },
];

export default function Chinese() {
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
