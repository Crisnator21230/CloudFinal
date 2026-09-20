import React from "react";
import ReactDOM from "react-dom/client";
import NatorLanding from "./NatorLanding";
// The bundler loads the stylesheet, but TypeScript has no CSS module declaration.
// @ts-expect-error CSS imports are handled at runtime by the bundler.
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NatorLanding />
  </React.StrictMode>
);