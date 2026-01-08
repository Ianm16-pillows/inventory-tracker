import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";
import { inventory as initialData } from "./data/inventoryData";

function App() {
  const [inventory, setInventory] = useState(initialData);

  // Add item
  const addItem = (item) => {
    setInventory([...inventory, { ...item, id: Date.now() }]);
  };

  // Update item
  const updateItem = (updatedItem) => {
    setInventory(
      inventory.map((item) => (item.id === updatedItem.id ? updatedItem : item))
    );
  };

  // Delete item
  const deleteItem = (id) => {
    setInventory(inventory.filter((item) => item.id !== id));
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
        <nav className="bg-blue-600 text-white p-4 flex justify-between">
          <h1 className="font-bold text-xl">Smart Inventory Tracker</h1>
          <div className="space-x-4">
            <Link to="/" className="hover:underline">Inventory</Link>
            <Link to="/add" className="hover:underline">Add Item</Link>
            <Link to="/alerts" className="hover:underline">Alerts</Link>
          </div>
        </nav>

        <main className="p-6">
          <Routes>
            <Route
              path="/"
              element={
                <Inventory
                  inventory={inventory}
                  deleteItem={deleteItem}
                />
              }
            />
            <Route
              path="/add"
              element={<AddItem addItem={addItem} />}
            />
            <Route
              path="/edit/:id"
              element={<EditItem inventory={inventory} updateItem={updateItem} />}
            />
            <Route
              path="/alerts"
              element={<Alerts inventory={inventory} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
