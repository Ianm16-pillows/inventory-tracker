export default function Inventory({ items, onEdit }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Category</th>
          <th>Qty</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.category}</td>
            <td>{item.quantity}</td>
            <td>
              <button onClick={() => onEdit(item)}>Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
