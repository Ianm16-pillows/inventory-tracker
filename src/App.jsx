import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Inventory from "./pages/Inventory";
import Alerts from "./pages/Alerts";
import CsvImport from "./pages/CsvImport";
import Navbar from "./components/Navbar";

export default function App() {
  const [page, setPage] = useState("dashboard");

  return (
    <>
      <Navbar setPage={setPage} />
      <div className="container">
        {page === "dashboard" && <Dashboard />}
        {page === "inventory" && <Inventory />}
        {page === "alerts" && <Alerts />}
        {page === "csv" && <CsvImport />}
      </div>
    </>
  );
}
