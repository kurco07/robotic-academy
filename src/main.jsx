import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import ModulosProvider from "./context/ModulosProvider.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ModulosProvider>
      <App />
    </ModulosProvider>
  </BrowserRouter>
);
