import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddItem({ addNewItem }) {
  const navigate = useNavigate();

  // Predefined categories
  const categories = [
    "Cypress Diagnostics",
    "Qiagen Diagnostics",
    "Abbort",
    "Haemocue",
    "Lab Consumables",
    "Chemicals & Reagents",
  ];

  const [itemData, setItemData] = useState({
    name: "",
    category: "",
    quantity: "",
    supplier: "",
    expiry: "",
    notes: "",
  });

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!itemData.name || !itemData.category || !itemData.quantity) {
      alert("Name, Category, and Quantity are required.");
      return;
    }

    if (itemData.expiry && new Date(itemData.expiry) < new Date()) {
      alert("Expiry date must be in the future.");
      return;
    }

    addNewItem(itemData); // Pass data to parent
    navigate("/"); // Return to inventory list
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Add New Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Item name"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Category</label>
          <select
            name="category"
            value={itemData.category}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block mb-1 font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={itemData.quantity}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Enter quantity"
            required
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Supplier</label>
          <input
            type="text"
            name="supplier"
            value={itemData.supplier}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Supplier name"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Expiry Date</label>
          <input
            type="date"
            name="expiry"
            value={itemData.expiry}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          />
        </div>

        <div>
          <label className="block mb-1 font-semibold">Notes</label>
          <textarea
            name="notes"
            value={itemData.notes}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            placeholder="Additional info"
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Add Item
        </button>
      </form>
    </div>
  );
}

export default AddItem;
