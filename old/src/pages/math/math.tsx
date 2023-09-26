import { A, Route, Routes } from "@solidjs/router";
import { lazy } from "solid-js";

const MathAnalysis = lazy(() => import("./math-analysis/math-analysis"));
const SetTheory = lazy(() => import("./set-theory/set-theory"));

export default function Math() {
  return (
    <div>
      <nav>
        <A href="/math/set-theory">集合论</A>
        <A href="/math/math-analysis">数学分析</A>
      </nav>
      <Routes>
        <Route path="set-theory/*" component={SetTheory} />
        <Route path="math-analysis/*" component={MathAnalysis} />
      </Routes>
    </div>
  );
}
