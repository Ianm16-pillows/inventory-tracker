import React, { useState, useEffect } from "react";

const EditItem = ({ item, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    quantity: 0,
    lot: "",
    expiry: "",
    location: "",
  });

  useEffect(() => {
    if (item) setFormData(item);
  }, [item]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="p-4 bg-white rounded shadow-md max-w-md mx-auto mt-6">
      <h2 className="text-xl font-bold mb-4 text-primaryBlue">Edit Item</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
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
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="text"
          name="lot"
          placeholder="Lot / Batch Number"
          value={formData.lot}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="date"
          name="expiry"
          value={formData.expiry}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="bg-primaryGreen text-white px-4 py-2 rounded"
          >
            Save
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditItem;
