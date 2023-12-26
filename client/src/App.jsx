
import "./App.css";

import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";

import SendApplication from "./pages/Home/SendApplication";
import ApplicationSuccess from "./pages/Home/ApplicationSuccess";
import Sidebar from "./components/Sidebar";


function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route path="/" element={<SendApplication />} />
          <Route path="/basvuru-basarili" element={<ApplicationSuccess />} />
          
        </Routes>
      </div>
    </>
  );
}

export default App;
