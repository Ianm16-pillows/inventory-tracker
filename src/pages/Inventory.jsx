import React from "react";
import { inventory } from "../data/inventoryData";

const Inventory = ({ onEdit }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-md mt-4">
      <h2 className="text-xl font-bold mb-4">Inventory</h2>
      <table className="w-full border border-gray-200">
        <thead className="bg-blue-100">
          <tr>
            <th className="border px-2 py-1">ID</th>
            <th className="border px-2 py-1">Name</th>
            <th className="border px-2 py-1">Category</th>
            <th className="border px-2 py-1">Supplier</th>
            <th className="border px-2 py-1">Quantity</th>
            <th className="border px-2 py-1">Expiry</th>
            <th className="border px-2 py-1">Action</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className={item.quantity < 20 ? "bg-red-100" : ""}>
              <td className="border px-2 py-1">{item.id}</td>
              <td className="border px-2 py-1">{item.name}</td>
              <td className="border px-2 py-1">{item.category}</td>
              <td className="border px-2 py-1">{item.supplier}</td>
              <td className="border px-2 py-1">{item.quantity}</td>
              <td className="border px-2 py-1">{item.expiry}</td>
              <td className="border px-2 py-1">
                <button
                  className="bg-green-500 text-white px-2 py-1 rounded"
                  onClick={() => onEdit(item.id)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
