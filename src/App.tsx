import { Route, Routes } from "react-router-dom";
import ArtPage from "./pages/ArtPage/ArtPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <Routes>
      <Route path="/art" element={<ArtPage />}></Route>
      <Route path="/" element={<HomePage />}></Route>
    </Routes>
  );
}

export default App;
