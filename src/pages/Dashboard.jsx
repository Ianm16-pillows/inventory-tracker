import { inventoryData } from "../data";

export default function Dashboard() {
  const totalItems = inventoryData.length;
  const lowStock = inventoryData.filter(i => i.stock <= 2).length;

  return (
    <div className="grid">
      <div className="card">Total Products: {totalItems}</div>
      <div className="card alert">Low Stock Items: {lowStock}</div>
    </div>
  );
}
