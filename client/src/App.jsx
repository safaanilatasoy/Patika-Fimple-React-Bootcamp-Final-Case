
import "./App.css";

import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";

import SendApplication from "./pages/Home/SendApplication";
import ApplicationSuccess from "./components/ApplicationSuccess";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Admin/Login";
import SearchApplication from "./pages/Home/SearchApplication";
import AdminDasboard from './pages/Admin/Dashboard/AdminDasboard';

function App() {
  return (
    <>
        <Navbar />
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<SendApplication />} />
            <Route path="/basvuru-sorgula" element={<SearchApplication />} />
            <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
            <Route path="/admin" element={<Login />} />
            <Route path="/admin-dashboard" element={<AdminDasboard />} />
          </Routes>
        </div>
    </>
  );
}

export default App;
