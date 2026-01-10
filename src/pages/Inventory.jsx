import { Link } from "react-router-dom";
import { inventoryData } from "../data";

export default function Inventory() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">
        Smart Lab Inventory
      </h1>

      {inventoryData.map(item => (
        <div
          key={item.id}
          className="bg-white p-4 mb-3 rounded shadow flex justify-between"
        >
          <div>
            <p className="font-semibold">{item.name}</p>
            <p className="text-sm text-slate-600">
              {item.category} | Qty: {item.qty}
            </p>
          </div>

          <Link
            to={`/edit/${item.id}`}
            className="text-accent font-semibold"
          >
            Edit
          </Link>
        </div>
      ))}
    </div>
  );
}
