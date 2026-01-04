import React from "react";

const exampleItems = [
  { id: 1, name: "Sulphuric Acid", quantity: 10, expiryDate: "2026-02-15" },
  { id: 2, name: "HCL", quantity: 15, expiryDate: "2026-05-01" },
  { id: 3, name: "Isopropanol", quantity: 50, expiryDate: "2027-01-01" },
  { id: 4, name: "Ethanal", quantity: 20, expiryDate: "2026-04-15" },
  { id: 5, name: "Methanol", quantity: 5, expiryDate: "2026-03-20" },
  { id: 6, name: "TB Lab Test Kit", quantity: 25, expiryDate: "2026-08-01" },
  { id: 7, name: "H. Pylori Test Kit", quantity: 30, expiryDate: "2026-12-01" },
  { id: 8, name: "Syphilis Test Kit", quantity: 12, expiryDate: "2026-06-15" },
  { id: 9, name: "HBsAg Test Kit", quantity: 18, expiryDate: "2026-07-01" },
  { id: 10, name: "Malaria Test Kit", quantity: 50, expiryDate: "2026-09-01" },
  { id: 11, name: "COVID Test Kit", quantity: 40, expiryDate: "2026-05-20" },
  { id: 12, name: "Measles Test Kit", quantity: 22, expiryDate: "2026-10-15" },
];

const LOW_STOCK_THRESHOLD = 20;
const EXPIRY_WARNING_DAYS = 90;

function Alerts() {
  const today = new Date();

  const lowStock = exampleItems.filter((item) => item.quantity <= LOW_STOCK_THRESHOLD);

  const expiringSoon = exampleItems.filter((item) => {
    const expiry = new Date(item.expiryDate);
    const diffDays = (expiry - today) / (1000 * 60 * 60 * 24);
    return diffDays <= EXPIRY_WARNING_DAYS;
  });

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Alerts</h2>

      {lowStock.length > 0 && (
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Low Stock</h3>
          <ul className="space-y-1">
            {lowStock.map((item) => (
              <li key={item.id} className="p-2 border rounded bg-red-100">
                {item.name} — Quantity: {item.quantity}
              </li>
            ))}
          </ul>
        </div>
      )}

      {expiringSoon.length > 0 && (
        <div>
          <h3 className="font-semibold mb-2">Expiring Soon</h3>
          <ul className="space-y-1">
            {expiringSoon.map((item) => (
              <li key={item.id} className="p-2 border rounded bg-yellow-100">
                {item.name} — Expiry: {item.expiryDate}
              </li>
            ))}
          </ul>
        </div>
      )}

      {lowStock.length === 0 && expiringSoon.length === 0 && (
        <div className="p-2 border rounded bg-green-100">No alerts</div>
      )}
    </div>
  );
}

export default Alerts;
