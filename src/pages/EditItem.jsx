import React, { useState, useEffect } from "react";
import { inventory } from "../data/inventoryData";

const EditItem = ({ itemId, onSave }) => {
  const [item, setItem] = useState(null);
  const [form, setForm] = useState({
    name: "",
    category: "",
    supplier: "",
    quantity: 0,
    expiry: "",
  });

  useEffect(() => {
    const existing = inventory.find((i) => i.id === itemId);
    if (existing) {
      setItem(existing);
      setForm(existing);
    }
  }, [itemId]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSave) onSave({ ...form, id: item.id });
    alert("Item updated!");
  };

  if (!item) return <div>Item not found</div>;

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Edit Item: {item.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label>Category</label>
          <input
            type="text"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label>Supplier</label>
          <input
            type="text"
            name="supplier"
            value={form.supplier}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <div>
          <label>Expiry</label>
          <input
            type="date"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            className="w-full border px-2 py-1 rounded"
          />
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditItem;

