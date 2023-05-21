import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { firebaseContext } from "./store/context";
import { db, auth, app } from "./firebase/config";
import Context from "./store/context";
ReactDOM.render(
  <firebaseContext.Provider value={{ db, auth, app }}>
    <Context>
      <App />
    </Context>
  </firebaseContext.Provider>,
  document.getElementById("root")
);
