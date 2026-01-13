export default function Navbar({ setPage }) {
  return (
    <div className="nav">
      <button onClick={() => setPage("dashboard")}>Dashboard</button>
      <button onClick={() => setPage("inventory")}>Inventory</button>
      <button onClick={() => setPage("alerts")}>Alerts</button>
      <button onClick={() => setPage("csv")}>CSV Import</button>
    </div>
  );
}
