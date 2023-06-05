import { A, Route, Routes } from "@solidjs/router";
import Electric from "./electric/electric";
import Indie from "./indie/indie";
import Sad from "./sad/sad";

export default function Music() {
  return (
    <div>
      <nav>
        <A href="/music/electric">电子</A>
        <A href="/music/indie">独立</A>
        <A href="/music/sad">伤感</A>
      </nav>
      <Routes>
        <Route path="electric" component={Electric} />
        <Route path="indie" component={Indie} />
        <Route path="sad" component={Sad} />
      </Routes>
    </div>
  );
}
