import React, { useState } from "react";

function EditItem({ item, onUpdate }) {
  const [formData, setFormData] = useState({ ...item });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Item Name"
          className="w-full p-2 border rounded"
        />
        <input
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          type="number"
          placeholder="Quantity"
          className="w-full p-2 border rounded"
        />
        <input
          name="expiryDate"
          value={formData.expiryDate}
          onChange={handleChange}
          type="date"
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Update
        </button>
      </form>
    </div>
  );
}

export default EditItem;
