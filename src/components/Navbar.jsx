// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex space-x-4">
      <Link to="/inventory">Inventory</Link>
      <Link to="/add">Add Item</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
}

export default Navbar;

