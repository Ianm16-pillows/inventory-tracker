import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="bg-slate-900 text-white p-4 flex gap-6">
      <Link to="/">Dashboard</Link>
      <Link to="/inventory">Inventory</Link>
      <Link to="/add">Add Item</Link>
      <Link to="/alerts">Alerts</Link>
    </nav>
  )
}

export default Navbar
