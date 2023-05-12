import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.css";

const divRoot = document.getElementById("root");
const createdRoot = createRoot(divRoot);

createdRoot.render(
  <StrictMode>
    <App />
  </StrictMode>
);
