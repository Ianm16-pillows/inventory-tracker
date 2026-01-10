import { inventoryData } from "../data";

export default function Alerts() {
  const lowStock = inventoryData.filter(item => item.qty < 10);

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-primary">
        Low Stock Alerts
      </h1>

      {lowStock.map(item => (
        <p key={item.id} className="text-red-600 mt-2">
          {item.name} is low (Qty: {item.qty})
        </p>
      ))}
    </div>
  );
}

