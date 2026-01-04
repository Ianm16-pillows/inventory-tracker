import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";

// Optional: Navbar
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/inventory" />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/add" element={<AddItem />} />
            <Route path="/edit/:id" element={<EditItem />} />
            <Route path="/alerts" element={<Alerts />} />
            {/* 404 fallback */}
            <Route path="*" element={<div>Page not found</div>} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
