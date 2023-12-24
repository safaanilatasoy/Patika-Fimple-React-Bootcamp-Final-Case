
import "./App.css";

import {Routes, Route} from "react-router-dom";


import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Deneme from "./pages/Deneme";


function App() {
  return (
    <>
      <Navbar />

      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/deneme" element={<Deneme />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
