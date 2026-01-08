import React from "react";
import { Link } from "react-router-dom";

function Inventory({ inventory }) {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold">Inventory List</h2>
        <Link to="/add" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add Item
        </Link>
      </div>

      <table className="min-w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-blue-200">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Category</th>
            <th className="py-2 px-4 text-left">Quantity</th>
            <th className="py-2 px-4 text-left">Supplier</th>
            <th className="py-2 px-4 text-left">Expiry</th>
            <th className="py-2 px-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item) => (
            <tr key={item.id} className="border-b hover:bg-blue-50">
              <td className="py-2 px-4">{item.name}</td>
              <td className="py-2 px-4">{item.category}</td>
              <td className={`py-2 px-4 ${item.quantity <= item.lowStock ? "text-red-600 font-bold" : ""}`}>
                {item.quantity}
              </td>
              <td className="py-2 px-4">{item.supplier}</td>
              <td className="py-2 px-4">{item.expiry}</td>
              <td className="py-2 px-4">
                <Link to={`/edit/${item.id}`} className="text-blue-600 hover:underline mr-2">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Inventory;
