import { useEffect, useState } from "react"
import InventoryList from "../components/InventoryList"
import SearchBar from "../components/SearchBar"

function Inventory() {
  const [items, setItems] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("items")) || []
    setItems(data)
  }, [])

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <SearchBar setSearch={setSearch} />
      <InventoryList items={filteredItems} />
    </div>
  )
}

export default Inventory
