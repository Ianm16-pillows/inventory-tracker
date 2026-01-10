export default function EditItem({ item, setEditing, items, setItems }) {
  const save = () => {
    setItems(items.map(i => i.id === item.id ? item : i));
    setEditing(null);
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="text-2xl font-bold mb-4">
        Edit Item
      </h2>

      <input
        type="number"
        defaultValue={item.qty}
        onChange={e => item.qty = Number(e.target.value)}
        className="border p-2 rounded w-full mb-4"
      />

      <button
        onClick={save}
        className="bg-primary text-white px-4 py-2 rounded"
      >
        Save Changes
      </button>
    </div>
  );
}
