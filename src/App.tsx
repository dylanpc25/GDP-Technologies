import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";

import { Home } from "./pages/Home/Home";
import { Services } from "./pages/Services/Services";
import { About } from "./pages/About/About";
import { Team } from "./pages/Team/Team";
import { Projects } from "./pages/Projects/Projects";
import { Contact } from "./pages/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/equipo" element={<Team />} />
        <Route path="/proyectos" element={<Projects />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;