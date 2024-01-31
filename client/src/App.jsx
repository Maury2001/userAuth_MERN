import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SignUp from "./components/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="register" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
