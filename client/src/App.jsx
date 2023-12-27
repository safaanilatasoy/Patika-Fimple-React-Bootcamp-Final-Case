
import "./App.css";

import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";

import SendApplication from "./pages/Home/SendApplication";
import ApplicationSuccess from "./pages/Home/ApplicationSuccess";
import Sidebar from "./components/Sidebar";
import Login from "./pages/Admin/Login";


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<SendApplication />} />
          <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
          <Route path="/admin" element={<Login />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
