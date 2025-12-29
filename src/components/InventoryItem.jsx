function InventoryItem({ item, items, setItems }) {
  const handleDelete = () => {
    const updated = items.filter((i) => i.id !== item.id);
    setItems(updated);
  };

  return (
    <div className="item-card">
      <h4>{item.name}</h4>
      <p>Category: {item.category}</p>
      <p>Quantity: {item.quantity}</p>
      <p>Expiry: {item.expiryDate}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default InventoryItem;
