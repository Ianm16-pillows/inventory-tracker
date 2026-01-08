import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";

function App() {
  const [inventory, setInventory] = useState([
    // Cypress Diagnostics
    { id: "1", name: "10 Parameters Urine Panel", category: "Cypress Diagnostics", quantity: 20, supplier: "Cypress", expiry: "2026-02-01", lowStock: 5 },
    { id: "2", name: "2 Parameters Urine Panel", category: "Cypress Diagnostics", quantity: 15, supplier: "Cypress", expiry: "2026-01-20", lowStock: 5 },
    // Qiagen
    { id: "3", name: "QuantiFERON-TB Gold Plus Tubes", category: "Qiagen Diagnostics", quantity: 50, supplier: "Qiagen", expiry: "2026-06-01", lowStock: 10 },
    { id: "4", name: "RNeasy Mini Kit", category: "Qiagen Diagnostics", quantity: 30, supplier: "Qiagen", expiry: "2026-03-15", lowStock: 5 },
    // Abbort
    { id: "5", name: "Afinion ACR Test", category: "Abbort", quantity: 10, supplier: "Abbort", expiry: "2026-05-01", lowStock: 5 },
    { id: "6", name: "Alinity I Immunoassay", category: "Abbort", quantity: 8, supplier: "Abbort", expiry: "2026-04-01", lowStock: 5 },
    // Haemocue
    { id: "7", name: "HemoCue Hb 201 DM System", category: "Haemocue", quantity: 5, supplier: "Haemocue", expiry: "2026-07-01", lowStock: 2 }
  ]);

  const addItem = (item) => {
    setInventory([...inventory, { ...item, id: Date.now().toString() }]);
  };

  const updateItem = (id, updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-100 to-green-100">
        <div className="container mx-auto py-6">
          <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">Smart Inventory Tracker</h1>
          <Routes>
            <Route path="/" element={<Inventory inventory={inventory} />} />
            <Route path="/add" element={<AddItem addItem={addItem} />} />
            <Route path="/edit/:id" element={<EditItem inventory={inventory} updateItem={updateItem} />} />
            <Route path="/alerts" element={<Alerts inventory={inventory} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
