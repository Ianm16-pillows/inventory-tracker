import React, { useState } from "react";
import { Link } from "react-router-dom";

// Example lab items
const exampleItems = [
  // Chemicals
  { id: 1, name: "Sulphuric Acid", category: "Chemicals", quantity: 10, expiryDate: "2026-02-15" },
  { id: 2, name: "HCL", category: "Chemicals", quantity: 15, expiryDate: "2026-05-01" },
  { id: 3, name: "Isopropanol", category: "Chemicals", quantity: 50, expiryDate: "2027-01-01" },
  { id: 4, name: "Ethanal", category: "Chemicals", quantity: 20, expiryDate: "2026-04-15" },
  { id: 5, name: "Methanol", category: "Chemicals", quantity: 5, expiryDate: "2026-03-20" },

  // Rapid Test Kits
  { id: 6, name: "TB Lab Test Kit", category: "Rapid Test", quantity: 25, expiryDate: "2026-08-01" },
  { id: 7, name: "H. Pylori Test Kit", category: "Rapid Test", quantity: 30, expiryDate: "2026-12-01" },
  { id: 8, name: "Syphilis Test Kit", category: "Rapid Test", quantity: 12, expiryDate: "2026-06-15" },
  { id: 9, name: "HBsAg Test Kit", category: "Rapid Test", quantity: 18, expiryDate: "2026-07-01" },
  { id: 10, name: "Malaria Test Kit", category: "Rapid Test", quantity: 50, expiryDate: "2026-09-01" },
  { id: 11, name: "COVID Test Kit", category: "Rapid Test", quantity: 40, expiryDate: "2026-05-20" },
  { id: 12, name: "Measles Test Kit", category: "Rapid Test", quantity: 22, expiryDate: "2026-10-15" },
];

function Inventory() {
  const [items, setItems] = useState(exampleItems);

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Inventory</h1>
      <table className="w-full table-auto border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Category</th>
            <th className="border px-2 py-1">Quantity</th>
            <th className="border px-2 py-1">Expiry</th>
            <th className="border px-2 py-1">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.category}</td>
              <td className="border px-2 py-1">{item.quantity}</td>
              <td className="border px-2 py-1">{item.expiryDate}</td>
              <td className="border px-2 py-1 space-x-2">
                <Link
                  to={`/edit/${item.id}`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
