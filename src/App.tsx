import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.scss";
import Dashboard from "./lib/pages/dashboard";
import Boxes from "./lib/pages/boxes";
import NotFound from "./lib/pages/notFound";
import AppHeaderBar from "../src/common/components/layout/AppHeaderBar";

function App() {
  return (
    <>
      <AppHeaderBar></AppHeaderBar>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/boxes" element={<Boxes />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route */}
      </Routes>
    </>
  );
}

export default App;
