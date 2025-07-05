import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ClickProvider } from "./shared/contexts";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <ClickProvider>
    <StrictMode>
      <App />
    </StrictMode>
    </ClickProvider>
  </Provider>
);
