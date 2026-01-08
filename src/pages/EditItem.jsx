import { useParams, useNavigate } from "react-router-dom";

export default function EditItem() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold text-primary">
        Edit Inventory Item #{id}
      </h2>

      <button
        className="mt-4 bg-secondary text-white px-4 py-2 rounded"
        onClick={() => navigate("/")}
      >
        Save Changes
      </button>
    </div>
  );
}
