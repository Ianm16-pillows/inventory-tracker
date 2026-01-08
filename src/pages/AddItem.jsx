import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem({ addItem }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: "",
    supplier: "",
    expiry: "",
    lowStock: 5
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem(formData);
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="name" placeholder="Name" className="w-full border p-2 rounded" onChange={handleChange} required />
        <input type="text" name="category" placeholder="Category" className="w-full border p-2 rounded" onChange={handleChange} required />
        <input type="number" name="quantity" placeholder="Quantity" className="w-full border p-2 rounded" onChange={handleChange} required />
        <input type="text" name="supplier" placeholder="Supplier" className="w-full border p-2 rounded" onChange={handleChange} />
        <input type="date" name="expiry" className="w-full border p-2 rounded" onChange={handleChange} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Add Item</button>
      </form>
    </div>
  );
}

export default AddItem;
