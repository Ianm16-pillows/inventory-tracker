import { useState } from "react";

export default function EditItem({ item, onUpdate }) {
  const [form, setForm] = useState(item);

  const submit = (e) => {
    e.preventDefault();
    onUpdate({ ...form, quantity: Number(form.quantity) });
  };

  return (
    <form onSubmit={submit}>
      <h2>Edit Item</h2>
      <input value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })} />
      <input value={form.category}
        onChange={(e) => setForm({ ...form, category: e.target.value })} />
      <input type="number" value={form.quantity}
        onChange={(e) => setForm({ ...form, quantity: e.target.value })} />
      <button>Save</button>
    </form>
  );
}
