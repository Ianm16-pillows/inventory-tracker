import { Link } from "react-router-dom"

function InventoryItem({ item }) {
  const handleDelete = () => {
    const items = JSON.parse(localStorage.getItem("items")) || []
    const updated = items.filter(i => i.id !== item.id)
    localStorage.setItem("items", JSON.stringify(updated))
    window.location.reload()
  }

  return (
    <div className="border p-3 mb-2 flex justify-between">
      <div>
        <p className="font-bold">{item.name}</p>
        <p className="text-sm">{item.category} | Qty: {item.quantity}</p>
      </div>

      <div className="flex gap-2">
        <Link to={`/edit/${item.id}`} className="text-blue-600">Edit</Link>
        <button onClick={handleDelete} className="text-red-600">Delete</button>
      </div>
    </div>
  )
}

export default InventoryItem
