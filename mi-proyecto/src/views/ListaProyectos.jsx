import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Grid,
    Typography,
    TextField,
    Fab
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import proyectoService from "../services/proyectoService";
import ProyectoCard from "../components/ProyectoCard";
import FormularioProyecto from "../components/FormularioProyecto";
import RegistroActividad from "../components/RegistroActividad";

const ListaProyectos = () => {

    const navigate = useNavigate();

    const [proyectos, setProyectos] = useState(
        proyectoService.obtenerProyectos()
    );

    const [busqueda, setBusqueda] = useState("");
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [ultimaActualizacion, setUltimaActualizacion] = useState("");

    const primeraCarga = useRef(true);
    const accionUsuario = useRef(false);

    useEffect(() => {

        if (primeraCarga.current) {
            primeraCarga.current = false;
            return;
        }

        if (!accionUsuario.current) return;

        const ahora = new Date();

        const fechaHora =
            `${ahora.getDate().toString().padStart(2, "0")}/` +
            `${(ahora.getMonth() + 1).toString().padStart(2, "0")}/` +
            `${ahora.getFullYear()} a las ` +
            `${ahora.getHours().toString().padStart(2, "0")}:` +
            `${ahora.getMinutes().toString().padStart(2, "0")} hs.`;

        setUltimaActualizacion(fechaHora);

        accionUsuario.current = false;

    }, [proyectos]);

    const eliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        accionUsuario.current = true;

        setProyectos(proyectoService.obtenerProyectos());
    };

    const buscar = (texto) => {

        setBusqueda(texto);

        if (texto === "") {
            setProyectos(proyectoService.obtenerProyectos());
        } else {
            setProyectos(proyectoService.buscarProyecto(texto));
        }
    };

    const agregarProyecto = (datos) => {

        const {
            titulo,
            categoria,
            estado,
            descripcion,
            descripcion2,
            integrante,
            rol
        } = datos;

        if (
            titulo.trim() === "" ||
            categoria.trim() === "" ||
            estado.trim() === ""
        ) {
            alert("Complete los campos obligatorios");
            return;
        }

        const nuevoProyecto = {
            id: Date.now(),
            titulo,
            categoria,
            estado,
            descripcion: [descripcion, descripcion2],
            recursos: ["PDF", "Drive", "GitHub"],
            equipo: [
                {
                    nombre: integrante,
                    rol: rol
                }
            ]
        };

        proyectoService.agregarProyecto(nuevoProyecto);

        accionUsuario.current = true;

        setProyectos(proyectoService.obtenerProyectos());

        setMostrarFormulario(false);
    };

    const verDetalle = (id) => {
        navigate(`/proyecto/${id}`);
    };

    return (

        <Container maxWidth="xl" sx={{ mt: 4, mb: 4 }}>

            <Typography
                variant="h3"
                align="center"
                fontWeight="bold"
                gutterBottom
            >
                Lista de Proyectos
            </Typography>

            <TextField
                fullWidth
                label="Buscar proyecto"
                variant="outlined"
                value={busqueda}
                onChange={(e) => buscar(e.target.value)}
                sx={{
                    mb: 4,
                    maxWidth: 600,
                    display: "block",
                    mx: "auto"
                }}
            />

            <Grid container spacing={4} justifyContent="center">

                {proyectos.map((proyecto) => (

                    <Grid item xs={12} sm={6} md={4} lg={3} key={proyecto.id}>

                        <ProyectoCard
                            proyecto={proyecto}
                            onEliminar={eliminar}
                            onVerDetalle={verDetalle}
                        />

                    </Grid>

                ))}

            </Grid>

            <Fab
                color="primary"
                onClick={() => setMostrarFormulario(!mostrarFormulario)}
                sx={{
                    position: "fixed",
                    bottom: 80,
                    right: 40,
                    width: 85,
                    height: 85,
                    boxShadow: 8,
                    transition: "all 0.4s ease",
                    "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 12
                    }
                }}
            >
                <AddIcon sx={{ fontSize: 45 }} />
            </Fab>

            {mostrarFormulario && (
                <FormularioProyecto
                    onAgregar={agregarProyecto}
                    onCancelar={() => setMostrarFormulario(false)}
                />
            )}

            {ultimaActualizacion !== "" && (
                <RegistroActividad fechaHora={ultimaActualizacion} />
            )}

        </Container>
    );
};

export default ListaProyectos;