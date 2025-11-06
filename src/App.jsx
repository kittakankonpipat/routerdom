import React from "react";
import Product from "./Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Bestsell from "./Bestsell";
// import Product from "./Product";

const App = () => {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Bestsell" element={<Bestsell />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};

export default App;
