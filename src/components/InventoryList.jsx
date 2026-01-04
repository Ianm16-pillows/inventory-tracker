import InventoryItem from "./InventoryItem"

function InventoryList({ items }) {
  return (
    <div className="mt-4">
      {items.map(item => (
        <InventoryItem key={item.id} item={item} />
      ))}
    </div>
  )
}

export default InventoryList
