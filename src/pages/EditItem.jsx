import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditItem({ inventory, updateItem }) {
  const { id } = useParams(); // Get item ID from route
  const navigate = useNavigate();

  const categories = [
    "Cypress Diagnostics",
    "Qiagen Diagnostics",
    "Abbort",
    "Haemocue",
    "Lab Consumables",
    "Chemicals & Reagents",
  ];

  // Find the item to edit
  const currentItem = inventory.find((item) => item.id === id);

  const [itemData, setItemData] = useState({
    name: "",
    category: "",
    quantity: "",
    supplier: "",
    expiry: "",
    notes: "",
  });

  useEffect(() => {
    if (currentItem) {
      setItemData({ ...currentItem });
    }
  }, [currentItem]);

  const handleChange = (e) => {
    setItemData({ ...itemData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!itemData.name || !itemData.category || !itemData.quantity) {
      alert("Name, Category, and Quantity are required.");
      return;
    }

    if (itemData.expiry && new Date(itemData.expiry) < new Date()) {
      alert("Expiry date must be in the future.");
      return;
    }

    updateItem(id, itemData); // Update item in parent state
    navigate("/"); // Go back to inventory list
  };

  if (!currentItem) {
    return (
      <div className="max-w-2xl mx-auto mt-10 text-center text-red-600">
        Item not found.
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 rounded shadow mt-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1 font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={itemData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
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
          />
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditItem;
