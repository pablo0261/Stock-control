import ReactDOM from "react-dom/client";
const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
// import { Provider } from 'react-redux'
// import store from './redux/store/store.ts'
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "./App.module.sass";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <Provider store={store}>
  <Auth0Provider
    clientId={CLIENT_ID}
    domain={"http://localhost:5173"}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
  // </Provider>,
);
