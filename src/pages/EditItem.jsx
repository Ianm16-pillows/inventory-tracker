import { useParams } from "react-router-dom";
import { inventoryData } from "../data";

export default function EditItem() {
  const { id } = useParams();
  const item = inventoryData.find(i => i.id === Number(id));

  if (!item) {
    return <p className="p-6">Item not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-primary">Edit Item</h1>
      <p className="mt-2">Name: {item.name}</p>
      <p>Category: {item.category}</p>
      <p>Quantity: {item.qty}</p>
    </div>
  );
}
