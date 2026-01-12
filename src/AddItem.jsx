import { useState } from "react";

export default function AddItem({ onAdd }) {
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
  });

  const submit = (e) => {
    e.preventDefault();
    onAdd({ ...form, quantity: Number(form.quantity) });
    setForm({ name: "", category: "", quantity: "" });
  };

  return (
    <form onSubmit={submit}>
      <h2>Add Item</h2>
      <input placeholder="Name" value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input placeholder="Category" value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="number" placeholder="Quantity" value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
      <button>Add</button>
    </form>
  );
}
