import React from "react";
import { Routes, Route } from "react-router-dom";

// Import your components
import AdminDashboard from "./components/admin pages/html/Dashboard";
import EvaluatorManagement from "./components/admin pages/html/evManagement";
import TeamManagement from "./components/admin pages/html/tmManagement";
import EvaluatorDashboard from "./components/Evaluator Pages/evDashboard";
import Landing from "./components/Visitor Pages/html/Landing";
import Login from "./components/Visitor Pages/html/Login";
import Registration from "./components/Visitor Pages/html/registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Registration />} />

      <Route path="/admin/dashboard" element={<AdminDashboard />} />
      <Route path="/admin/evaluators" element={<EvaluatorManagement />} />
      <Route path="/admin/teams" element={<TeamManagement />} />

      <Route path="/evaluator/dashboard" element={<EvaluatorDashboard />} />
    </Routes>
  );
}

export default App;
