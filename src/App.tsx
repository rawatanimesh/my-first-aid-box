import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./lib/pages/Dashboard";
import Boxes from "./lib/pages/Boxes";
import MedicineInventory from "./lib/pages/MedicineInventory";
import NotFound from "./lib/pages/NotFound";
import AppHeaderBar from "../src/common/components/layout/AppHeaderBar";

function App() {
  return (
    <>
      <AppHeaderBar></AppHeaderBar>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="/medicine-inventory" element={<MedicineInventory />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;
