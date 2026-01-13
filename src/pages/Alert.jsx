import { inventoryData } from "../data";

export default function Alerts() {
  const alerts = inventoryData.filter(i => i.stock <= 2);

  return (
    <div className="card">
      <h2>Low Stock Alerts</h2>
      {alerts.map((item, i) => (
        <p key={i} className="alert">
          {item.name} — Stock: {item.stock}
        </p>
      ))}
    </div>
  );
}
