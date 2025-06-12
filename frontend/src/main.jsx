import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.jsx";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
       <ToastContainer position="top-right" autoClose={3000} />
    </Provider>
  </StrictMode>
);
