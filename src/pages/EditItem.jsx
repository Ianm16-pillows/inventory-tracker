import React, { useState, useEffect } from "react";
import { inventory } from "../data/inventoryData";

const EditItem = ({ itemId, onSave }) => {
  const [item, setItem] = useState(null);
  const [form, setForm] = useState({ name: "", category: "", supplier: "", quantity: 0, expiry: "" });

  useEffect(() => {
    const existing = inventory.find((i) => i.id === itemId);
    if (existing) {
      setItem(existing);
      setForm(existing);
    }
  }, [itemId]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...form, id: item.id });
  };

  if (!item) return <div>Item not found</div>;

  return (
    <div className="p-4 max-w-md mx-auto bg-white shadow-md rounded-md">
      <h2 className="text-xl font-bold mb-4">Edit Item: {item.name}</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        {["name","category","supplier","quantity","expiry"].map((field) => (
          <div key={field}>
            <label className="capitalize">{field}</label>
            <input
              type={field==="quantity" ? "number" : field==="expiry" ? "date" : "text"}
              name={field}
              value={form[field]}
              onChange={handleChange}
              className="w-full border px-2 py-1 rounded"
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditItem;
