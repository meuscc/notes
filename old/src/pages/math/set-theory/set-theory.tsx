import { Routes, Route, A } from "@solidjs/router";
import NaiveSetTheory from "./naive_set_theory/naive_set_theory";
import AxiomaticSetTheory from "./axiomatic_set_theory/axiomatic_set_theory";
export default function SetTheory() {
  return (
    <div>
      <nav>
        <A href="/math/set-theory/naive-set-theory">朴素集合论</A>
        <A href="/math/set-theory/axiomatic-set-theory">公理集合论</A>
      </nav>
      <Routes>
        <Route path="naive-set-theory" component={NaiveSetTheory} />
        <Route path="axiomatic-set-theory" component={AxiomaticSetTheory} />
      </Routes>
    </div>
  );
}
