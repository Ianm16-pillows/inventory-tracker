import React, { useState } from "react";
import { Link } from "react-router-dom";

function Inventory({ inventory, deleteItem }) {
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");

  // Get unique categories for filter dropdown
  const categories = [...new Set(inventory.map((item) => item.category))];

  // Filtered inventory
  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.supplier.toLowerCase().includes(search.toLowerCase());
    const matchesCategory =
      categoryFilter === "" || item.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-700 mb-4">Inventory</h2>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by name or supplier"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="p-2 border rounded flex-1"
        />
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Inventory Table */}
      <div className="overflow-x-auto bg-white rounded shadow">
        <table className="w-full border-collapse">
          <thead className="bg-blue-100">
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Supplier</th>
              <th className="border p-2">Expiry</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id} className="hover:bg-blue-50">
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.category}</td>
                <td
                  className={`border p-2 font-bold ${
                    parseInt(item.quantity) <= 5 ? "text-red-600" : ""
                  }`}
                >
                  {item.quantity}
                </td>
                <td className="border p-2">{item.supplier}</td>
                <td
                  className={`border p-2 font-bold ${
                    item.expiry &&
                    new Date(item.expiry) - new Date() <= 30 * 24 * 60 * 60 * 1000
                      ? "text-red-600"
                      : ""
                  }`}
                >
                  {item.expiry || "-"}
                </td>
                <td className="border p-2 space-x-2">
                  <Link
                    to={`/edit/${item.id}`}
                    className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
            {filteredInventory.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center p-4 text-gray-500">
                  No items found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;
