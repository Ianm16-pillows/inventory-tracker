import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditItem({ inventory, updateItem }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = inventory.find((i) => i.id === parseInt(id));

  const [formData, setFormData] = useState({
    name: "",
    category: "",
    supplier: "",
    quantity: "",
    expiry: "",
  });

  useEffect(() => {
    if (item) {
      setFormData({
        name: item.name,
        category: item.category,
        supplier: item.supplier,
        quantity: item.quantity,
        expiry: item.expiry,
      });
    }
  }, [item]);

  if (!item) return <div>Item not found</div>;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateItem({ ...item, ...formData, quantity: parseInt(formData.quantity) });
    navigate("/");
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Item Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={formData.supplier}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}

export default EditItem;

