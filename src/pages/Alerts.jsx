import React from "react";

function Alerts({ inventory }) {
  const today = new Date();
  const lowStockItems = inventory.filter(item => item.quantity <= item.lowStock);
  const expiringItems = inventory.filter(item => new Date(item.expiry) <= new Date(today.setDate(today.getDate() + 30)));

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Alerts</h2>

      <div className="mb-6">
        <h3 className="font-semibold text-red-600 mb-2">Low Stock Items</h3>
        {lowStockItems.length === 0 ? (
          <p>All items sufficiently stocked.</p>
        ) : (
          <ul className="list-disc list-inside">
            {lowStockItems.map(item => (
              <li key={item.id}>{item.name} ({item.quantity} left)</li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 className="font-semibold text-orange-600 mb-2">Expiring Soon (30 days)</h3>
        {expiringItems.length === 0 ? (
          <p>No items expiring soon.</p>
        ) : (
          <ul className="list-disc list-inside">
            {expiringItems.map(item => (
              <li key={item.id}>{item.name} (Expiry: {item.expiry})</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Alerts;
