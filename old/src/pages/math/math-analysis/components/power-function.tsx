import { createSignal, onMount } from "solid-js";

export default function PowerFunction() {
  const [param, setParam] = createSignal(1);

  onMount(() => {
    const brd = JXG.JSXGraph.initBoard("box1", {
      axis: true,
      boundingbox: [-5, 5, 5, -5],
    });
    const expSlider = brd.create(
      "slider",
      [
        [-3, 3.5],
        [3, 3.5],
        [-3, 1, 3],
      ],
      { name: "指数", snapWidth: 0.1 }
    );

    const f = function (x: number) {
      setParam(expSlider.Value());
      return Math.pow(x, expSlider.Value());
    };
    brd.create("functiongraph", [f]);
  });

  return (
    <div>
      <m-i m={`f(x) = x^ {${param().toFixed(1)}}`}></m-i>
      <div id={"box1"} style={{ width: "400px", height: "400px" }}></div>
    </div>
  );
}
