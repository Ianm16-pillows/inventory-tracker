import React, { useState } from 'react';
import { items as sampleItems } from '../data/sampleData.js';
import { Link } from 'react-router-dom';

export default function Inventory() {
  const [items, setItems] = useState(sampleItems);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-primary">Inventory List</h1>
      <table className="table-auto w-full bg-white shadow-md rounded">
        <thead className="bg-primary text-white">
          <tr>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Qty</th>
            <th className="px-4 py-2">Unit</th>
            <th className="px-4 py-2">Expiry</th>
            <th className="px-4 py-2">Location</th>
            <th className="px-4 py-2">Supplier</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map(item => (
            <tr key={item.id} className="border-b">
              <td className="px-4 py-2">{item.name}</td>
              <td className="px-4 py-2">{item.category}</td>
              <td className="px-4 py-2">{item.quantity}</td>
              <td className="px-4 py-2">{item.unit}</td>
              <td className="px-4 py-2">{item.expiryDate}</td>
              <td className="px-4 py-2">{item.location}</td>
              <td className="px-4 py-2">{item.supplier}</td>
              <td className="px-4 py-2">
                <Link to="/edit">Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
