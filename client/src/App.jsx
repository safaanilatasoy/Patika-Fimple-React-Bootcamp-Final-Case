import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import SendApplication from "./pages/Home/SendApplication";
import ApplicationSuccess from "./components/ApplicationSuccess";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Admin/Login";
import SearchApplication from "./pages/Home/SearchApplication";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";



import PrivateRoute from "./Routes/PrivateRoute";
import NotAuth from "./Routes/NotAuth";

function App() {
  
  const isLoggedIn = () => {
    const isLogged = window.sessionStorage.getItem("isAuthenticated");
    return isLogged == "true"
  }
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content">
        
        <Routes>
          <Route path="/" element={<SendApplication />} />
          <Route path="/" element={<PrivateRoute isAuthenticated={isLoggedIn} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Route>
          <Route path="/" element={<NotAuth isAuthenticated={isLoggedIn} />}>
            <Route path="/admin-login" element={<Login />} />
          </Route>
              
          <Route path="/basvuru-sorgula" element={<SearchApplication />} />
          <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
        
        </Routes>
      </div>
    </>
  );
}

export default App;
