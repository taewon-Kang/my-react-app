import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";

import "normalize.css";
import "./assets/styles/reset.css";
import MuiProvider from "./components/MuiProvider/MuiProvider.tsx";
import ReactQueryProvider from "./components/ReactQueryProvider/ReactQueryProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MuiProvider>
      <ReactQueryProvider>
        <App />
      </ReactQueryProvider>
    </MuiProvider>
  </StrictMode>
);
