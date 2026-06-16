import { useContext, useState } from "react";

import {
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
    Grid,
    Divider,
    Box,
    TextField,
    Button
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";
import EditIcon from "@mui/icons-material/Edit";

import {
    UsuarioContext
} from "../context/UsuarioContext";

const PerfilUsuario = () => {

    const {
        usuario,
        actualizarPerfil
    } = useContext(UsuarioContext);

    const [editando, setEditando] =
        useState(false);

    const [datos, setDatos] =
        useState(usuario);

    const cambiarInput = (e) => {

        const { name, value } = e.target;

        setDatos({
            ...datos,
            [name]: value
        });
    };

    const guardarCambios = () => {

        actualizarPerfil(datos);

        setEditando(false);
    };

    return (

        <Container
            maxWidth="sm"
            sx={{ mt: 5 }}
        >

            <Card
                elevation={6}
                sx={{
                    borderRadius: 4,
                    overflow: "hidden"
                }}
            >

                <Box
                    sx={{
                        bgcolor: "primary.main",
                        height: 100
                    }}
                />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        mt: -5
                    }}
                >

                    <Avatar
                        sx={{
                            width: 90,
                            height: 90,
                            bgcolor: "secondary.main",
                            fontSize: 32,
                            border: "3px solid white"
                        }}
                    >
                        {usuario.nombre
                            .split(" ")
                            .map(n => n[0])
                            .join("")}
                    </Avatar>

                </Box>

                <CardContent>

                    <Typography
                        variant="h5"
                        align="center"
                        fontWeight="bold"
                    >
                        {usuario.nombre}
                    </Typography>

                    <Typography
                        align="center"
                        color="text.secondary"
                    >
                        Perfil de usuario
                    </Typography>

                    <Divider sx={{ my: 3 }} />

                    <Grid
                        container
                        spacing={2}
                    >

                        <Grid item xs={12}>

                            <TextField
                                fullWidth
                                label="Nombre"
                                name="nombre"
                                value={datos.nombre}
                                onChange={cambiarInput}
                                disabled={!editando}
                            />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField
                                fullWidth
                                label="DNI"
                                name="dni"
                                value={datos.dni}
                                onChange={cambiarInput}
                                disabled={!editando}
                            />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField
                                fullWidth
                                label="Rol"
                                name="rol"
                                value={datos.rol}
                                onChange={cambiarInput}
                                disabled={!editando}
                            />

                        </Grid>

                        <Grid item xs={12}>

                            <TextField
                                fullWidth
                                label="Institución"
                                name="institucion"
                                value={datos.institucion}
                                onChange={cambiarInput}
                                disabled={!editando}
                            />

                        </Grid>

                    </Grid>

                    <Box
                        sx={{
                            mt: 3,
                            display: "flex",
                            justifyContent: "center",
                            gap: 2
                        }}
                    >

                        {!editando ? (

                            <Button
                                variant="contained"
                                startIcon={<EditIcon />}
                                onClick={() =>
                                    setEditando(true)
                                }
                            >
                                Editar Perfil
                            </Button>

                        ) : (

                            <Button
                                variant="contained"
                                color="success"
                                onClick={guardarCambios}
                            >
                                Guardar Cambios
                            </Button>

                        )}

                    </Box>

                </CardContent>

            </Card>

        </Container>

    );
};

export default PerfilUsuario;