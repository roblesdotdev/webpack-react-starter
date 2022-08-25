import React, { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Working</h1>
      <p>{count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
};

export default App;
