import { useState } from "react";
import { initialItems } from "./data";
import Inventory from "./Inventory";
import AddItem from "./AddItem";
import EditItem from "./EditItem";

export default function App() {
  const [items, setItems] = useState(initialItems);
  const [editingItem, setEditingItem] = useState(null);

  const addItem = (item) => {
    setItems([...items, { ...item, id: Date.now() }]);
  };

  const updateItem = (updated) => {
    setItems(items.map((i) => (i.id === updated.id ? updated : i)));
    setEditingItem(null);
  };

  return (
    <div className="container">
      <h1>🧪 Smart Lab Inventory Tracker</h1>

      {editingItem ? (
        <EditItem item={editingItem} onUpdate={updateItem} />
      ) : (
        <AddItem onAdd={addItem} />
      )}

      <Inventory items={items} onEdit={setEditingItem} />
    </div>
  );
}
