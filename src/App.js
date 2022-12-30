import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/userManagment/register";
import { LogIn } from "./pages/userManagment/logIn";
import { Welcome } from "./pages/welcome";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes path="/" element={<Register />} >
          <Route path="SignUp" element={<Register />} />
          <Route  path="logIn" element={<LogIn />}/>
          <Route path="welcome" element={<Welcome />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
