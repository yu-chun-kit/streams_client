import ReactDOM from "react-dom/client";
import App from "./components/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "@reduxjs/toolkit";
// import reducers from "./reducers";
// import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import "semantic-ui-css/semantic.min.css";
import reducers from "./reducers";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
