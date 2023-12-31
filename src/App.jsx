import "./App.css";

import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import SendApplication from "./pages/Public/SendApplication";
import ApplicationSuccess from "./components/ApplicationSuccess";
import Login from "./pages/Admin/Login";
import SearchApplication from "./pages/Public/SearchApplication";
import AdminDashboard from "./pages/Admin/Dashboard/AdminDashboard";



import PrivateRoute from "./Routes/PrivateRoute";
import NotAuth from "./Routes/NotAuth";
import Sidebar from './components/Sidebar/index';
import ApplicationDetails from './components/ApplicationDetails';

function App() {
  
  const isLoggedIn = () => {
    const isLogged = window.sessionStorage.getItem("isAuthenticated");
    return isLogged == "true";
  }

  return (
    <>
      <Navbar isAuthenticated={isLoggedIn}/>
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<SendApplication />} />
          <Route
            path="/"
            element={<PrivateRoute isAuthenticated={isLoggedIn} />}
          >
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
            <Route path="/application-details/:id" element={<ApplicationDetails />} />
          </Route>

          {/* Admin Layouth */}
          <Route element={<NotAuth isAuthenticated={isLoggedIn} />}>
            <Route path="/admin-login" element={<Login />} />
          </Route>

          <Route path="/basvuru-sorgula" element={<SearchApplication />} />
          <Route
            path="/basvuru-basarili/:id"
            element={<ApplicationSuccess />}
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
