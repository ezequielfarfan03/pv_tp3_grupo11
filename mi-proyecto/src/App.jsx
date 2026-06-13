import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Dashboard from "./views/Dashboard";
import ListaProyectos from "./views/ListaProyectos";
import PerfilUsuario from "./views/PerfilUsuario";
import DetalleProyecto from "./views/DetalleProyecto";

function App() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Header />

      <Nav />

      <Box sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/proyectos" element={<ListaProyectos />} />

          <Route path="/proyecto/:id" element={<DetalleProyecto />} />

          <Route path="/perfil" element={<PerfilUsuario />} />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;