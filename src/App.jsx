import "./App.css";
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SuccessModal from "./components/SuccessModal";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <SuccessModal />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
