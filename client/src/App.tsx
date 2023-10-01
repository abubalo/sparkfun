import { Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./pages/home/Homepage";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import TalentProfiles from "./pages/talent/TalentProfiles";
import Talent from "./pages/talent/Talent";

function App() {
  axios.defaults.baseURL = "http://localhost:3300";
  axios.defaults.withCredentials = true;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/talents" element={<TalentProfiles />} />
      <Route path="/talent/:id" element={<Talent />} />
    </Routes>
  );
}

export default App;
