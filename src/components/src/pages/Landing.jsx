import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="page">
      <h1>Smart Warehouse Inventory Tracker</h1>
      <p>Control stock. Prevent expiry. Move faster.</p>
      <Link to="/dashboard">
        <button>Go to Dashboard</button>
      </Link>
    </div>
  );
}

export default Landing;
