import { Route, Routes } from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Carta from "../Pages/Carta";
import Reserva from "../Pages/Reserva";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/carta" element={<Carta />} />
      <Route path="/reserva" element={<Reserva />} />
    </Routes>
  );
};

export default Router;
