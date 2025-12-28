import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import AddEditItem from "./pages/AddEditItem";
import mockData from "./data/mockData";

function App() {
  const [items, setItems] = useState(mockData);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route
          path="/dashboard"
          element={<Dashboard items={items} setItems={setItems} />}
        />
        <Route
          path="/add"
          element={<AddEditItem items={items} setItems={setItems} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
