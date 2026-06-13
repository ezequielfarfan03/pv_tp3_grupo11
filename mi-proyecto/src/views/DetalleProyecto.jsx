import { useParams }
    from "react-router-dom";

import proyectoService
    from "../services/proyectoService";

import {

    Container,
    Paper,
    Typography

}
    from "@mui/material";

const DetalleProyecto = () => {

    const { id } = useParams();

    const proyecto =
        proyectoService.obtenerProyectoPorId(id);

    if (!proyecto) {

        return (

            <Typography>

                Proyecto no encontrado

            </Typography>

        );

    }

    return (

        <Container>

            <Paper
                sx={{ p: 3 }}
            >

                <Typography
                    variant="h4"
                >
                    {proyecto.titulo}
                </Typography>

                <Typography>

                    Categoría:
                    {proyecto.categoria}

                </Typography>

                <Typography>

                    Estado:
                    {proyecto.estado}

                </Typography>

                <Typography sx={{ mt: 2 }}>

                    {proyecto.descripcion[0]}

                </Typography>

                <Typography>

                    {proyecto.descripcion[1]}

                </Typography>

            </Paper>

        </Container>

    );

};

export default DetalleProyecto;