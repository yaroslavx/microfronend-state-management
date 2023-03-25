import React from "react";
import ReactDOM from "react-dom";
import { Header } from "./Header";
import { CountProvider } from "host/store";
import "./index.scss";
const App = () => (
  <div className="mt-10 text-3xl mx-auto max-w-6xl">
    <Header />
    <div>Name: nav</div>
  </div>
);
ReactDOM.render(
  <CountProvider>
    <App />
  </CountProvider>,
  document.getElementById("app")
);
