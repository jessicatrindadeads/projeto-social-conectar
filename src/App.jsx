import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Doacao from "./pages/doacao/Doacao";
import Eventos from "./pages/eventos/Eventos";
import Home from "./pages/home/Home";
import Mentoria from "./pages/mentoria/Mentoria";
import NotFound from "./pages/notFound/NotFound";
import Usuario from "./pages/usuario/Usuario";
import Voluntariado from "./pages/voluntariado/Voluntariado";
import "./globalStyles.scss";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doacao" element={<Doacao />} />
        <Route path="/voluntariado" element={<Voluntariado />} />
        <Route path="/mentoria" element={<Mentoria />} />
        <Route path="/eventos" element={<Eventos />} />
        <Route path="/usuario" element={<Usuario />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
