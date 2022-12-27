import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/userManagment/register";
import { LogIn } from "./pages/userManagment/logIn";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes path="/" element={<Register />} >
          <Route path="SignUp" element={<Register />} />
          <Route  path="logIn" element={<LogIn />}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
