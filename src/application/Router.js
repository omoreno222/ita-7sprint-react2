import { BrowserRouter, Routes, Route } from "react-router-dom";
import Benvinguda from "../pages/benvinguda";
import Pressupost from "../pages/pressupost";
import { useSearchParams } from "react-router-dom";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Benvinguda />} />
      <Route path="/pressupost" element={<Pressupost />} />
      <Route path="*" element={<div>404 Página no encontrada!</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router;
