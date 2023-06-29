import { useState, useEffect } from "react";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import { BrowserRouter } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/configFirebase";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SET_ACTIVE_USER, REMOVE_ACTIVE_USER } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const [user, setUser] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          SET_ACTIVE_USER({
            email: user.email,
            userName: user.displayName,
            userID: user.uid,
          })
        );
        setUser(true);
      } else {
        dispatch(REMOVE_ACTIVE_USER());
        setUser(false);
      }
    });
  }, [dispatch]);

  /* onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(false);
    }
  }); */

  return (
    <>
      <ToastContainer position="bottom-center" />
      <BrowserRouter>{user ? <Home /> : <Login />}</BrowserRouter>
    </>
  );
};

export default App;
