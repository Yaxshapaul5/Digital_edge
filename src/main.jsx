import React from "react";
import { createRoot } from "react-dom/client";
import MainComponent from "./components/MainComponent";
import { mockData } from "./mockData";

const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("root element not found");

const root = createRoot(rootElement);
root.render(
  <div
    style={{
      display: "inline-block",
      width: "100px",
    }}
    data-ignore="used only for top most containter width"
  >
    <MainComponent {...mockData} />
  </div>
);
