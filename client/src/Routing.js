import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./LoginPage/Login"
import App from "./App";
function Routing() {
    return (
        <Router>
          <Routes>
          <Route path="/Home" element={<App />} />
          <Route path="/" element={<Login />} />
          
    
          </Routes>
        </Router>
      );
    }
    

export default Routing
