import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditItem() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    name: "",
    quantity: "",
    expiryDate: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Item ${id} updated (mock)`);
    navigate("/inventory");
  };

  return (
    <div className="max-w-md mx-auto bg-white p-4 shadow rounded">
      <h2 className="text-xl font-bold mb-4">Edit Item</h2>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          name="name"
          placeholder="Item Name"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <input
          name="expiryDate"
          type="date"
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
}

export default EditItem;
