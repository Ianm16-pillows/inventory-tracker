import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "Sulphuric Acid",
    quantity: 5,
    category: "Chemical",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated item:", item);
    navigate("/");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Edit Item (ID: {id})</h2>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={item.name}
          onChange={handleChange}
          placeholder="Item name"
        />
        <br /><br />

        <input
          name="quantity"
          type="number"
          value={item.quantity}
          onChange={handleChange}
          placeholder="Quantity"
        />
        <br /><br />

        <input
          name="category"
          value={item.category}
          onChange={handleChange}
          placeholder="Category"
        />
        <br /><br />

        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
}
