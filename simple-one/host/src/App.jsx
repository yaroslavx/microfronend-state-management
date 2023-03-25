import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Header } from "nav/Header";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header count={count} onClear={() => setCount(0)} />
      <div>Name: host</div>
      <div>count {count}</div>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-indigo-400 text-white font-bold py-2 px-4 rounded"
      >
        +1
      </button>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("app"));
