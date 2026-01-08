import React, { useState } from "react";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";

function App() {
  const [editingItemId, setEditingItemId] = useState(null);

  const handleEdit = (id) => setEditingItemId(id);
  const handleSave = (updatedItem) => {
    alert(`Saved: ${updatedItem.name}`);
    setEditingItemId(null);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Smart Inventory Tracker</h1>
      {editingItemId ? (
        <EditItem itemId={editingItemId} onSave={handleSave} />
      ) : (
        <>
          <AddItem />
          <Inventory onEdit={handleEdit} />
          <Alerts />
        </>
      )}
    </div>
  );
}

export default App;
