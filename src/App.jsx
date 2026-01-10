import { Routes, Route } from "react-router-dom";
import Inventory from "./pages/Inventory";
import AddItem from "./pages/AddItem";
import EditItem from "./pages/EditItem";
import Alerts from "./pages/Alerts";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inventory />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </>
  );
}
