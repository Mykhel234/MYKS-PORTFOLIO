import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
// import NextProject from "./Components/Slider";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/NextProject" element={<NextProject/>} /> */}
      </Routes>

    </BrowserRouter>
  );
};

export default App;
