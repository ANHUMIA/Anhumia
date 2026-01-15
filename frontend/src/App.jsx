import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Story from "./pages/Story";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/truyen/:id" element={<Story />} />
      </Routes>
    </BrowserRouter>
  );
}
