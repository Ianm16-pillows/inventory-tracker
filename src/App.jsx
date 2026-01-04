import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Dashboard from "./pages/Dashboard"
import Inventory from "./pages/Inventory"
import AddItem from "./pages/AddItem"
import EditItem from "./pages/EditItem"
import Alerts from "./pages/Alerts"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/add" element={<AddItem />} />
        <Route path="/edit/:id" element={<EditItem />} />
        <Route path="/alerts" element={<Alerts />} />
      </Routes>
    </>
  )
}

export default App
