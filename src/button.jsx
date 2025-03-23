import React, { useState } from 'react';

function Counnter() {
  const [value, setValue] = useState(0);

  const increase = () => setValue(value + 1);
  const decrease = () => setValue(value - 1);
  const reset = () => setValue(0);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={increase}>Increase +1</button>
      <button onClick={decrease}>Decrease -1</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}

export default Counter;  // Exporting the Counter component once at the end
