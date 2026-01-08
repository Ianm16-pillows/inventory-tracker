import React from "react";
import { inventory } from "../data/inventoryData";

const Alerts = () => {
  const lowStock = inventory.filter((i) => i.quantity < 20);
  return (
    <div className="p-4 bg-yellow-50 shadow-md rounded-md mt-4">
      <h2 className="text-xl font-bold mb-2">Low Stock Alerts</h2>
      {lowStock.length === 0 ? (
        <div>All items are sufficiently stocked.</div>
      ) : (
        <ul className="list-disc pl-5">
          {lowStock.map((i) => (
            <li key={i.id}>
              {i.name} ({i.quantity}) - supplier: {i.supplier}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Alerts;
