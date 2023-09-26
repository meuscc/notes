import { lazy } from "solid-js";
import { Routes, Route } from "@solidjs/router";

const Math = lazy(() => import("./pages/math/math"));
const Programming = lazy(() => import("./pages/programming/programming"));
const Music = lazy(() => import("./pages/music/music"));

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/math/*" component={Math} />
        <Route path="/programming/*" component={Programming} />
        <Route path="/music/*" component={Music} />
      </Routes>
    </>
  );
}
