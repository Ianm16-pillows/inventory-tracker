import InventoryList from "../components/InventoryList";

function Dashboard({ items, setItems }) {
  return (
    <div className="page">
      <h2>Inventory Dashboard</h2>
      <InventoryList items={items} setItems={setItems} />
    </div>
  );
}

export default Dashboard;
