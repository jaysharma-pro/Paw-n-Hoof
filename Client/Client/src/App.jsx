import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
// import Home from "./pages/Home";

function App() {
  return (
    <Router>
           <Navbar /> {/* 👈 yahan navbar */}
      <Routes>
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;

