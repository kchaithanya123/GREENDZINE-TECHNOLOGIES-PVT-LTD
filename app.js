import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ResendOTP from "./components/ResendOTP";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/resend-otp" element={<ResendOTP />} />
      </Routes>
    </Router>
  );
}

export default App;
