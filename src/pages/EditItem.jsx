import { useParams } from "react-router-dom";

export default function EditItem() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold text-primary">
        Edit Item ID: {id}
      </h1>
      <p className="mt-2 text-slate-600">
        Editing workflow initialized.
      </p>
    </div>
  );
}
