import { createSignal, onMount } from "solid-js";

export default function ExponentialFunction() {
  const [param, setParam] = createSignal(1);

  onMount(() => {
    const brd = JXG.JSXGraph.initBoard("box2", {
      axis: true,
      boundingbox: [-5, 5, 5, -5],
    });
    const pSlider = brd.create(
      "slider",
      [
        [0, 3.5],
        [3, 3.5],
        [0.1, 1, 3],
      ],
      { name: "指数", snapWidth: 0.1 }
    );

    const f = function (x: number) {
      setParam(Number(pSlider.Value().toFixed(1)));
      return Math.pow(Number(pSlider.Value().toFixed(1)), x);
    };
    brd.create("functiongraph", [f]);
  });

  return (
    <div>
      <m-i m={`f(x) = ${param().toFixed(1)}^x`}></m-i>
      <div id={"box2"} style={{ width: "400px", height: "400px" }}></div>
    </div>
  );
}
