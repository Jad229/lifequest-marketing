import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import ContactPage from "./pages/ContactPage";
import FeaturePage from "./pages/FeaturePage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
