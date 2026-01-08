import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";

// Example inventory data
const initialInventory = [
  // Cypress Diagnostics
  { id: "1", name: "Urine 10 parameters", category: "Cypress Diagnostics", quantity: 10, supplier: "Cypress Labs", expiry: "2026-12-31", notes: "Routine urine panel" },
  { id: "2", name: "Urine 2 parameters", category: "Cypress Diagnostics", quantity: 15, supplier: "Cypress Labs", expiry: "2026-10-15", notes: "Routine urine panel" },
  // Qiagen Diagnostics
  { id: "3", name: "QuantiFERON-TB Gold Plus Blood Collection Tubes", category: "Qiagen Diagnostics", quantity: 20, supplier: "Qiagen", expiry: "2026-06-30", notes: "" },
  { id: "4", name: "RNeasy Mini Kit (50)", category: "Qiagen Diagnostics", quantity: 25, supplier: "Qiagen", expiry: "2026-07-31", notes: "" },
  // Abbort
  { id: "5", name: "Afinion ACR Test", category: "Abbort", quantity: 12, supplier: "Abbort", expiry: "2026-11-30", notes: "" },
  { id: "6", name: "Alinity I", category: "Abbort", quantity: 3, supplier: "Abbort", expiry: "2026-09-30", notes: "Immunoassay System" },
  // Haemocue
  { id: "7", name: "HemoCue Hb 201 DM System", category: "Haemocue", quantity: 5, supplier: "Haemocue", expiry: "2027-01-31", notes: "" },
  { id: "8", name: "Ampylobacter Antisera", category: "Haemocue", quantity: 8, supplier: "Haemocue", expiry: "2026-08-15", notes: "" },
  // Chemicals & Reagents
  { id: "9", name: "Sulphuric Acid", category: "Chemicals & Reagents", quantity: 7, supplier: "LabChem", expiry: "2026-12-31", notes: "" },
  { id: "10", name: "HCl", category: "Chemicals & Reagents", quantity: 9, supplier: "LabChem", expiry: "2026-12-31", notes: "" },
];

function App() {
  const [inventory, setInventory] = useState(initialInventory);

  // Add new item
  const addNewItem = (item) => {
    const newItem = { id: Date.now().toString(), ...item };
    setInventory([...inventory, newItem]);
  };

  // Update existing item
  const updateItem = (id, updatedData) => {
    setInventory(inventory.map(item => item.id === id ? { ...item, ...updatedData } : item));
  };

  // Low-stock alerts
  const lowStockItems = inventory.filter(item => Number(item.quantity) <= 5);

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-blue-50 to-green-50">
        <nav className="bg-blue-700 text-white px-6 py-4 flex justify-between">
          <h1 className="text-xl font-bold">Smart Inventory Tracker</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Inventory</Link>
            <Link to="/add" className="hover:underline">Add Item</Link>
          </div>
        </nav>

        <div className="p-6">
          {lowStockItems.length > 0 && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 rounded">
              <h2 className="font-bold text-red-700">Low Stock Alerts</h2>
              <ul className="list-disc ml-6">
                {lowStockItems.map(item => (
                  <li key={item.id}>{item.name} (Qty: {item.quantity})</li>
                ))}
              </ul>
            </div>
          )}

          <Routes>
            <Route path="/" element={<Inventory inventory={inventory} />} />
            <Route path="/add" element={<AddItem addNewItem={addNewItem} />} />
            <Route path="/edit/:id" element={<EditItem inventory={inventory} updateItem={updateItem} />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
