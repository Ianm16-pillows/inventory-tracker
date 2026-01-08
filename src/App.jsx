import React, { useState } from "react";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";

function App() {
  const [editingItemId, setEditingItemId] = useState(null);

  const handleEdit = (id) => {
    setEditingItemId(id);
  };

  const handleSave = (updatedItem) => {
    // Update inventory logic here (or just alert for demo)
    alert(`Saved: ${updatedItem.name}`);
    setEditingItemId(null);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-4">
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
