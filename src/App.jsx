import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessModal from "./components/SuccessModal";

export default function App() {
  return (
    <BrowserRouter>
       <SuccessModal /> 
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
