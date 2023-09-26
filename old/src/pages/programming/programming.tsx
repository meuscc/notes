import { A, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const Rust = lazy(() => import("./rust/rust"));
const Cpp = lazy(() => import("./cpp/cpp"));
const Js = lazy(() => import("./js/js"));
const Python = lazy(() => import("./python/python"));

export default function Programming() {
  return (
    <div>
      <nav>
        <A href="/programming/cpp">CPP</A>
        <A href="/programming/python">python</A>
        <A href="/programming/rust">Rust</A>
        <A href="/programming/js">Js</A>
      </nav>
      <Routes>
        <Route path="rust" component={Rust} />
        <Route path="cpp" component={Cpp} />
        <Route path="js" component={Js} />
        <Route path="python" component={Python} />
      </Routes>
    </div>
  );
}
