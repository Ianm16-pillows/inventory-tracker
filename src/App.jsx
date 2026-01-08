import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";

export default function App() {
  return (
    <BrowserRouter>
      <nav className="bg-primary text-white p-4 flex gap-6">
        <NavLink to="/">Inventory</NavLink>
        <NavLink to="/add">Add Item</NavLink>
        <NavLink to="/alerts">Alerts</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </BrowserRouter>
  );
}
