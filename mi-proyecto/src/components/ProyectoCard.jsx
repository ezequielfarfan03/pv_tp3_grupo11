import {
    Card,
    CardContent,
    Button,
    Typography,
    Box,
    Chip
} from "@mui/material";

import {
    Link
} from "react-router-dom";

const ProyectoCard = ({
    proyecto,
    onEliminar
}) => {

    const {
        id,
        titulo,
        categoria,
        estado
    } = proyecto;

    return (

        <Card
            elevation={4}
            sx={{
                height: "100%",
                borderRadius: 4,
                transition: "0.3s",
                minHeight: 220,

                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: 10
                }
            }}
        >

            <CardContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                }}
            >

                <Box>

                    <Typography
                        variant="h6"
                        fontWeight="bold"
                        gutterBottom
                    >
                        {titulo}
                    </Typography>

                    <Chip
                        label={categoria}
                        color="primary"
                        size="small"
                        sx={{ mb: 2 }}
                    />

                    <Typography
                        color="text.secondary"
                    >
                        Estado:
                    </Typography>

                    <Typography
                        variant="body1"
                        fontWeight="bold"
                        sx={{ mb: 2 }}
                    >
                        {estado}
                    </Typography>

                </Box>

                <Box>

                    <Button
                        component={Link}
                        to={`/proyecto/${id}`}
                        variant="contained"
                        size="small"
                        fullWidth
                        sx={{ mb: 1 }}
                    >
                        Ver detalle
                    </Button>

                    <Button
                        color="error"
                        variant="outlined"
                        fullWidth
                        onClick={() =>
                            onEliminar(id)
                        }
                    >
                        Eliminar
                    </Button>

                </Box>

            </CardContent>

        </Card>

    );

};

export default ProyectoCard;