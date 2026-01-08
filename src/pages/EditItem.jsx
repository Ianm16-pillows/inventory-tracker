import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "Sulphuric Acid",
    quantity: 10,
    category: "Chemical",
  });

  const handleChange = (e) => {
    setItem({ ...item, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Item (ID: {id})</h2>

      <input
        name="name"
        value={item.name}
        onChange={handleChange}
      />
      <br /><br />

      <input
        type="number"
        name="quantity"
        value={item.quantity}
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="category"
        value={item.category}
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSave}>Save</button>
    </div>
  );
}
