import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router";
import CouterStore from "./ReduxCouter/CouterStore.js";
import { Provider } from "react-redux";
import { RecoilRoot } from "recoil";
import UserStore from "./ReduxToolKitCrud/UserStore.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RecoilRoot>
      <BrowserRouter>
        <Provider store={UserStore}>
          <App />
        </Provider>
      </BrowserRouter>
    </RecoilRoot>
  </StrictMode>
);
