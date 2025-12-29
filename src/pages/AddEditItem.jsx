import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddEditItem({ items, setItems }) {
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newItem = {
      id: Date.now(),
      name,
      category: "General",
      quantity: 0,
      expiryDate: "2026-01-01",
      supplier: "Unknown",
    };

    setItems([...items, newItem]);
    navigate("/dashboard");
  };

  return (
    <div className="page">
      <h2>Add New Item</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <button type="submit">Save Item</button>
      </form>
    </div>
  );
}

export default AddEditItem;
