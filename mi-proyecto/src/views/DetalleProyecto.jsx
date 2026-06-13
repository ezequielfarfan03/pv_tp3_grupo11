import { useParams, useNavigate } from "react-router-dom";

import proyectoService from "../services/proyectoService";

import {
    Container,
    Paper,
    Typography,
    Box,
    Chip,
    Button,
    Divider
} from "@mui/material";

const DetalleProyecto = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const proyecto = proyectoService.obtenerProyectoPorId(id);

    if (!proyecto) {
        return (
            <Container sx={{ mt: 4 }}>
                <Typography variant="h5" color="error">
                    Proyecto no encontrado
                </Typography>

                <Button
                    sx={{ mt: 2 }}
                    variant="contained"
                    onClick={() => navigate("/proyectos")}
                >
                    Volver
                </Button>
            </Container>
        );
    }

    return (
        <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>

            <Paper elevation={6} sx={{ p: 4, borderRadius: 4 }}>

                {/* Título */}
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    {proyecto.titulo}
                </Typography>

                {/* Categoría y estado */}
                <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
                    <Chip label={proyecto.categoria} color="primary" />
                    <Chip label={proyecto.estado} color="secondary" />
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Descripción */}
                <Typography variant="h6" gutterBottom>
                    Descripción
                </Typography>

                <Box sx={{ mb: 3 }}>
                    {proyecto.descripcion.map((item, index) => (
                        <Typography key={index} sx={{ mb: 1 }}>
                            {item}
                        </Typography>
                    ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Recursos */}
                <Typography variant="h6" gutterBottom>
                    Recursos
                </Typography>

                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                    {proyecto.recursos.map((recurso, index) => (
                        <Chip key={index} label={recurso} />
                    ))}
                </Box>

                <Divider sx={{ my: 2 }} />

                {/* Equipo */}
                <Typography variant="h6" gutterBottom>
                    Equipo
                </Typography>

                <Box sx={{ mt: 1 }}>
                    {proyecto.equipo.map((persona, index) => (
                        <Typography key={index} sx={{ mb: 1 }}>
                            👤 {persona.nombre} — {persona.rol}
                        </Typography>
                    ))}
                </Box>

                {/* Botón volver */}
                <Button
                    variant="contained"
                    sx={{ mt: 4 }}
                    onClick={() => navigate("/proyectos")}
                >
                    Volver a proyectos
                </Button>

            </Paper>
        </Container>
    );
};

export default DetalleProyecto;