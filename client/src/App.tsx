import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home/Homeage";
import axios from "axios";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashbaord from "./pages/dashboard/Dashbaord";

function App() {
  axios.defaults.baseURL = "http://localhost:5000";
  axios.defaults.withCredentials = true;

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/dashboard" element={<Dashbaord />} />
    </Routes>
  );
}

export default App;
