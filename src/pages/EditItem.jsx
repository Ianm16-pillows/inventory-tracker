import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function EditItem({ inventory, updateItem }) {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the item to edit
  const itemToEdit = inventory.find((item) => item.id === id);

  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    supplier: "",
    expiry: "",
    notes: "",
  });

  const [errors, setErrors] = useState({});

  const categories = [
    "Cypress Diagnostics",
    "Qiagen Diagnostics",
    "Abbort",
    "Haemocue",
    "Lab Consumables",
    "Chemicals & Reagents",
  ];

  useEffect(() => {
    if (itemToEdit) {
      setForm({
        name: itemToEdit.name || "",
        category: itemToEdit.category || "",
        quantity: itemToEdit.quantity || "",
        supplier: itemToEdit.supplier || "",
        expiry: itemToEdit.expiry || "",
        notes: itemToEdit.notes || "",
      });
    }
  }, [itemToEdit]);

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.category) newErrors.category = "Category is required";
    if (!form.quantity || isNaN(form.quantity)) newErrors.quantity = "Quantity must be a number";
    if (form.expiry && new Date(form.expiry) < new Date()) newErrors.expiry = "Expiry must be in the future";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    updateItem(id, form); // Update item in parent state
    navigate("/"); // Go back to inventory list
  };

  if (!itemToEdit) {
    return (
      <div className="text-center mt-20 text-red-600 font-bold">
        Item not found.
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold mb-4 text-green-700">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-4">

        <div>
          <label className="block font-semibold">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.name && <p className="text-red-600 text-sm">{errors.name}</p>}
        </div>

        <div>
          <label className="block font-semibold">Category</label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
          {errors.category && <p className="text-red-600 text-sm">{errors.category}</p>}
        </div>

        <div>
          <label className="block font-semibold">Quantity</label>
          <input
            type="number"
            name="quantity"
            value={form.quantity}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.quantity && <p className="text-red-600 text-sm">{errors.quantity}</p>}
        </div>

        <div>
          <label className="block font-semibold">Supplier</label>
          <input
            type="text"
            name="supplier"
            value={form.supplier}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
        </div>

        <div>
          <label className="block font-semibold">Expiry Date</label>
          <input
            type="date"
            name="expiry"
            value={form.expiry}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          />
          {errors.expiry && <p className="text-red-600 text-sm">{errors.expiry}</p>}
        </div>

        <div>
          <label className="block font-semibold">Notes</label>
          <textarea
            name="notes"
            value={form.notes}
            onChange={handleChange}
            className="border p-2 rounded w-full"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
        >
          Update Item
        </button>
      </form>
    </div>
  );
}

export default EditItem;
