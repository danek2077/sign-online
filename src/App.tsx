import { Link, Route, Routes } from "react-router-dom";
import ArtPage from "./pages/ArtPage";
import HomePage from "./pages/HomePage";
import React from "react";
function App() {
  return (
    <>
      <Link to="/art">ART</Link>
      <Link to="/">HOME</Link>
      <Routes>
        <Route path="/art" element={<ArtPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </>
  );
}

export default App;
