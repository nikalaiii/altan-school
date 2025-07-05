import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { ClickProvider } from "./shared/api/ClickContext/ClickContext.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <ClickProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </ClickProvider>
  </Provider>
);
