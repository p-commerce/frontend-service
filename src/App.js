import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Register } from "./pages/userManagment/register";
import { LogIn } from "./pages/userManagment/logIn";
import { Welcome } from "./pages/welcome";
import Dashboard from "./pages/manage";
import New from "./pages/new";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes path="/" element={<Register />} >
          <Route path="SignUp" element={<Register />} />
          <Route  path="logIn" element={<LogIn />}/>
          <Route path="welcome" element={<Welcome />} />
          <Route path="dashboard" element ={<Dashboard />} />
          <Route path="form" element ={<New />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
