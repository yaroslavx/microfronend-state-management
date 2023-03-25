import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import { Header } from "nav/Header";

import { CountProvider, useCount } from "host/store";

const App = () => {
  const [count, setCount] = useCount();
  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
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
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
