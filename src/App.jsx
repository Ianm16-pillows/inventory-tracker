import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";

// Generate unique IDs for items
const generateId = () => Math.random().toString(36).substr(2, 9);

function App() {
  const [inventory, setInventory] = useState([
    // Example items
    {
      id: generateId(),
      name: "CYANElite 290",
      category: "Cypress Diagnostics",
      quantity: 50,
      supplier: "Cypress Labs",
      expiry: "2026-12-31",
      notes: "10 parameters urine panel",
    },
    {
      id: generateId(),
      name: "QuantiFERON-TB Gold Plus Blood Collection Tubes",
      category: "Qiagen Diagnostics",
      quantity: 100,
      supplier: "Qiagen",
      expiry: "2027-06-30",
      notes: "TB testing kit",
    },
    {
      id: generateId(),
      name: "Afinion ACR Test",
      category: "Abbort",
      quantity: 75,
      supplier: "Abbort",
      expiry: "2026-09-30",
      notes: "Clinical chemistry test",
    },
    {
      id: generateId(),
      name: "HemoCue® Hb 201 DM System",
      category: "Haemocue",
      quantity: 20,
      supplier: "Haemocue",
      expiry: "2028-01-31",
      notes: "Hematology system",
    },
    {
      id: generateId(),
      name: "Sulphuric Acid",
      category: "Chemicals & Reagents",
      quantity: 200,
      supplier: "ChemCorp",
      expiry: "2027-05-31",
      notes: "Highly corrosive",
    },
  ]);

  // Add a new item
  const addNewItem = (item) => {
    setInventory([...inventory, { ...item, id: generateId() }]);
  };

  // Update existing item
  const updateItem = (id, updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === id ? { ...item, ...updatedItem } : item))
    );
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
        <nav className="bg-blue-700 text-white p-4 flex justify-between">
          <h1 className="font-bold text-xl">Smart Inventory Tracker</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">
              Inventory
            </Link>
            <Link to="/add" className="hover:underline">
              Add Item
            </Link>
          </div>
        </nav>

        <div className="p-6">
          <Routes>
            <Route
              path="/"
              element={<Inventory inventory={inventory} />}
            />
            <Route
              path="/add"
              element={<AddItem addNewItem={addNewItem} />}
            />
            <Route
              path="/edit/:id"
              element={<EditItem inventory={inventory} updateItem={updateItem} />}
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
