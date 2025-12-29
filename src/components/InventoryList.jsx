import InventoryItem from "./InventoryItem";

function InventoryList({ items, setItems }) {
  return (
    <div>
      {items.map((item) => (
        <InventoryItem
          key={item.id}
          item={item}
          items={items}
          setItems={setItems}
        />
      ))}
    </div>
  );
}

export default InventoryList;
