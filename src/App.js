import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import api from "./services/api";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details";
import Bookings from "./pages/Bookings";
import Login from "./pages/Login";
import { validateEmail } from "./utils/validation";

function App() {
  return (
    <BrowserRouter>
    <Routes>

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/bookings" element={<Bookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
