import { inventoryData } from "../data";

export default function Inventory() {
  return (
    <div className="card">
      <h2>Inventory</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Category</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {inventoryData.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.category}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
