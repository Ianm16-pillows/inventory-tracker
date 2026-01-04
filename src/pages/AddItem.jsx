import { useState } from "react"
import { useNavigate } from "react-router-dom"

function AddItem() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: "",
    category: "",
    quantity: "",
    expiryDate: ""
  })

  const handleSubmit = e => {
    e.preventDefault()
    const items = JSON.parse(localStorage.getItem("items")) || []
    items.push({ ...form, id: Date.now() })
    localStorage.setItem("items", JSON.stringify(items))
    navigate("/inventory")
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-md">
      <h1 className="text-xl font-bold mb-4">Add Item</h1>

      <input
        placeholder="Item name"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, name: e.target.value })}
        required
      />

      <input
        placeholder="Category"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, category: e.target.value })}
        required
      />

      <input
        type="number"
        placeholder="Quantity"
        className="border p-2 w-full mb-2"
        onChange={e => setForm({ ...form, quantity: e.target.value })}
        required
      />

      <input
        type="date"
        className="border p-2 w-full mb-4"
        onChange={e => setForm({ ...form, expiryDate: e.target.value })}
        required
      />

      <button className="bg-blue-600 text-white px-4 py-2">
        Save Item
      </button>
    </form>
  )
}

export default AddItem
