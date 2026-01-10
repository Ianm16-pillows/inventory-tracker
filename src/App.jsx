import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inventory from './pages/Inventory.jsx';
import AddItem from './pages/AddItem.jsx';
import EditItem from './pages/EditItem.jsx';
import Alerts from './pages/Alerts.jsx';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <nav className="bg-primary text-white p-4 flex gap-4">
          <Link to="/">Inventory</Link>
          <Link to="/add">Add Item</Link>
          <Link to="/alerts">Alerts</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Inventory />} />
          <Route path="/add" element={<AddItem />} />
          <Route path="/edit" element={<EditItem />} />
          <Route path="/alerts" element={<Alerts />} />
        </Routes>
      </div>
    </Router>
  );
}

