import { BrowserRouter, Routes, Route } from "react-router-dom";
import Benvinguda from "../pages/benvinguda";
import Pressupost from "../pages/pressupost";

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

/* import { BrowserRouter, Route, Routes } from "react-router-dom";
import Benvinguda from "../pages/benvinguda";
import Pressupost from "../pages/pressupost";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<Benvinguda />} />
      <Route path="/pressupost" element={<Pressupost />} />
      <Route path="*" element={<div>404 Página no encontrada!</div>} />
    </Routes>
  </BrowserRouter>
);

export default Router; */
