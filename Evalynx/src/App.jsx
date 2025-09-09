import { Routes, Route } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

// Import your components
import TeamManagement from "./components/admin pages/html/tmManagement";
import EvaluatorDashboard from "./components/Evaluator Pages/evDashboard";
import Landing from "./components/Visitor Pages/html/Landing";
import Login from "./components/Visitor Pages/html/Login";
import Registration from "./components/Visitor Pages/html/registration";
import Submissions from "./components/Participant Pages/html/submissions";
import TmDashboard from "./components/Participant Pages/html/tmDashboard";

// (⚠️ missing in your snippet, so make sure you actually have these files)
import AdminDashboard from "./components/admin pages/html/AdminDashboard";
import EvaluatorManagement from "./components/admin pages/html/EvaluatorManagement";

function App() {
  const [users, setUsers] = useState([]);

  // Fetch users from backend
  useEffect(() => {
    axios.get("http://localhost:5000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      {/* ✅ App Routes */}
      <Routes>
        {/* Visitor Routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/evaluators" element={<EvaluatorManagement />} />
        <Route path="/admin/teams" element={<TeamManagement />} />

        {/* Evaluator Routes */}
        <Route path="/evaluator/dashboard" element={<EvaluatorDashboard />} />

        {/* Participant Routes */}
        <Route path="/participant/dashboard" element={<TmDashboard />} />
        <Route path="/participant/submissions" element={<Submissions />} />
      </Routes>

      {/* ✅ Example Users Display (testing backend) */}
      <div style={{ padding: "20px" }}>
        <h2>Users from MongoDB</h2>
        <ul>
          {users.map((u) => (
            <li key={u._id}>{u.name} - {u.email}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;

