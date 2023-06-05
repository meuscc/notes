import { onMount } from "solid-js";
import PowerFunction from "./components/power-function";
import ExponentialFunction from "./components/exponential-function";

export default function MathAnalysis() {
  onMount(() => {});

  return (
    <div style={{ padding: "24px" }}>
      <h-2>1. 幂函数</h-2>
      <PowerFunction />
      <h-2>2. 指数函数</h-2>
      <ExponentialFunction />
      <h-2>3. 对数函数</h-2>
      <h-2>4. 三角函数</h-2>
      <h-2>5. 反三角函数</h-2>
    </div>
  );
}
