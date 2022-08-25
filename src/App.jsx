import React, { useState } from "react";
import style from "./App.module.css";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className={style.app}>
      <h1>Working</h1>
      <p className={style.count}>{count}</p>
      <button className={style.button} onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
    </div>
  );
};

export default App;
