import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-primary text-white p-4 flex gap-6">
      <Link to="/">Inventory</Link>
      <Link to="/add">Add Item</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  );
}

