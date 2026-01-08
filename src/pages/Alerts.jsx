import React from "react";

function Alerts({ inventory }) {
  // Low stock threshold
  const LOW_STOCK_THRESHOLD = 5;

  // Items expiring soon (within 30 days)
  const today = new Date();
  const EXPIRY_ALERT_DAYS = 30;

  const lowStockItems = inventory.filter(
    (item) => parseInt(item.quantity) <= LOW_STOCK_THRESHOLD
  );

  const expiringItems = inventory.filter((item) => {
    if (!item.expiry) return false;
    const expiryDate = new Date(item.expiry);
    const diffTime = expiryDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays <= EXPIRY_ALERT_DAYS && diffDays >= 0;
  });

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Alerts Dashboard</h2>

      {/* Low Stock */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold text-green-600 mb-3">Low Stock Items</h3>
        {lowStockItems.length === 0 ? (
          <p className="text-gray-500">No items are below the low stock threshold.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-green-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Quantity</th>
                <th className="border p-2">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {lowStockItems.map((item) => (
                <tr key={item.id} className="hover:bg-green-50">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2 text-red-600 font-bold">{item.quantity}</td>
                  <td className="border p-2">{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Expiring Soon */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-xl font-semibold text-blue-600 mb-3">Expiring Items (Next 30 Days)</h3>
        {expiringItems.length === 0 ? (
          <p className="text-gray-500">No items are expiring soon.</p>
        ) : (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-100">
                <th className="border p-2">Name</th>
                <th className="border p-2">Category</th>
                <th className="border p-2">Expiry Date</th>
                <th className="border p-2">Supplier</th>
              </tr>
            </thead>
            <tbody>
              {expiringItems.map((item) => (
                <tr key={item.id} className="hover:bg-blue-50">
                  <td className="border p-2">{item.name}</td>
                  <td className="border p-2">{item.category}</td>
                  <td className="border p-2 text-red-600 font-bold">{item.expiry}</td>
                  <td className="border p-2">{item.supplier}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Alerts;
