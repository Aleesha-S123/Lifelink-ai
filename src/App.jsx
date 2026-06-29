import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Opportunities from "./pages/Opportunities/Opportunities";
import Accessibility from "./pages/Accessibility/Accessibility";
import Safety from "./pages/Safety/Safety";
import Settings from "./pages/Settings/Settings";
import Wellness from "./pages/Wellness/Wellness";
import Healthcare from "./pages/Healthcare/Healthcare";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/opportunities" element={<Opportunities />} />
        <Route path="/accessibility" element={<Accessibility />} />
        <Route path="/safety" element={<Safety />} />
        <Route path="/wellness" element={<Wellness />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}