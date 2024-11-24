import "./App.css";
import Header from "./components/Header";
import AdminLogin from "./pages/AdminLogin";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/admin-login" element={<AdminLogin />} />
      </Routes>
    </BrowserRouter>
  );
}
