import React, { useState } from "react";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem"; // case-sensitive
import Alerts from "./pages/Alerts";

function App() {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  const handleAdd = (item) => setItems([...items, item]);
  const handleUpdate = (updated) =>
    setItems(items.map((i) => (i.id === updated.id ? updated : i)));
  const handleEdit = (item) => setEditingItem(item);
  const handleCancel = () => setEditingItem(null);

  return (
    <div className="min-h-screen p-4 bg-lightBlue">
      <h1 className="text-3xl font-bold text-center text-primaryBlue mb-4">
        Smart Inventory Tracker
      </h1>

      {!editingItem ? (
        <>
          <AddItem onAdd={handleAdd} />
          <Inventory items={items} onEdit={handleEdit} />
        </>
      ) : (
        <EditItem item={editingItem} onSave={handleUpdate} onCancel={handleCancel} />
      )}

      <Alerts items={items} />
    </div>
  );
}

export default App;
