import React, { useState, useContext } from "react";
import { firebaseContext } from "../../store/context";
import Logo from "../../olx-logo.png";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { collection, addDoc } from "firebase/firestore/lite";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

export default function Signup() {
  const history = useHistory();
  const { db } = useContext(firebaseContext);
  const Collection = collection(db, "users");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const handilSubmit = (e) => {
    e.preventDefault();

    let id;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        await updateProfile(auth.currentUser, { displayName: name }).catch(
          (err) => console.log(err)
        );
        id = userCredential.user;
      })
      .then(() => {
        addDoc(Collection, {
          userid: id.uid,
          name: name,
          phone: phone,
        });
      })
      .then(() => {
        history.push("/login");
      })
      .catch((error) => {
        alert(error.message);
        // ..
      });

    console.log(db);
    console.log(email);
  };
  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Img"></img>
        <form onSubmit={handilSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="fname"
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="fname"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="lname"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="lname"
            name="password"
          />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <p href="#" onClick={() => history.push("/login")}>
          Login
        </p>
      </div>
    </div>
  );
}
