import React, { useContext, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import Create from "./Pages/Create";
import View from "./Pages/ViewPost";
import { Authcontext } from "./store/context";
import Post from "./store/postContext";
/**
 * ?  =====Import Components=====
 */
import Home from "./Pages/Home";
import { getAuth, onAuthStateChanged } from "firebase/auth";

function App() {
  const { user, setuser } = useContext(Authcontext);
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (users) => {
      setuser(users);
    });
  });
  return (
    <div>
      <Post>
        <BrowserRouter>
          <Route path="/" exact>
            {" "}
            <Home />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          {!user ? (
            <Route path="/login">
              <Login />
            </Route>
          ) : (
            <Route path="/login">
              <Home />
            </Route>
          )}

          <Route path="/Create">
            <Create />
          </Route>
          <Route path="/view-post">
            <View />
          </Route>
          {/* <Route path='*'><Error/> </Route> */}
        </BrowserRouter>
      </Post>
    </div>
  );
}

export default App;
