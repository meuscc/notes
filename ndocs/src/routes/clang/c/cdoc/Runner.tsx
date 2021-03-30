import React, { useState } from 'react';

export default function Runner({ color }: { color: string }) {
  const [count, setCount] = useState(0);
  return (
    <div style={{ color }}>
      <div>{count}</div>
      <button onClick={() => setCount(v => v + 1)}>change</button>
    </div>
  );
}
