import { Link } from "react-router-dom";

const items = [
  { id: 1, name: "Sulphuric Acid", category: "Chemicals", qty: 20 },
  { id: 2, name: "CRP Test Kit", category: "Diagnostics", qty: 8 },
  { id: 3, name: "Urine 10 Parameters", category: "Urine Panels", qty: 15 }
];

export default function Inventory() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-primary mb-4">Inventory</h1>
      <ul className="space-y-3">
        {items.map(item => (
          <li
            key={item.id}
            className="bg-white p-4 rounded shadow flex justify-between"
          >
            <span>
              {item.name} — {item.category} (Qty: {item.qty})
            </span>
            <Link
              to={`/edit/${item.id}`}
              className="text-secondary font-semibold"
            >
              Edit
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
