import { useState } from "react";

import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
    Grid,
    Typography,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Box
} from "@mui/material";

import FolderIcon from "@mui/icons-material/Folder";
import GroupIcon from "@mui/icons-material/Group";
import AddTaskIcon from "@mui/icons-material/AddTask";

const FormularioProyecto = ({
    onAgregar,
    onCancelar
}) => {

    const [formulario, setFormulario] = useState({

        titulo: "",
        categoria: "",
        estado: "",

        descripcion: "",
        descripcion2: "",

        integrante: "",
        rol: ""

    });

    const cambiarInput = (e) => {

        const { name, value } = e.target;

        setFormulario({

            ...formulario,

            [name]: value

        });

    };

    const enviarFormulario = () => {

        onAgregar(formulario);

        setFormulario({

            titulo: "",
            categoria: "",
            estado: "",

            descripcion: "",
            descripcion2: "",

            integrante: "",
            rol: ""

        });

    };

    return (

        <Dialog
            open={true}
            maxWidth="md"
            fullWidth
            PaperProps={{
                sx: {
                    borderRadius: 5,
                    overflow: "hidden"
                }
            }}
            BackdropProps={{
                sx: {
                    backdropFilter: "blur(5px)"
                }
            }}
        >

            <DialogTitle
                sx={{
                    background:
                        "linear-gradient(135deg, #1976d2 0%, #42a5f5 100%)",
                    color: "white",
                    textAlign: "center",
                    py: 3
                }}
            >

                <AddTaskIcon
                    sx={{
                        fontSize: 50,
                        mb: 1
                    }}
                />

                <Typography
                    variant="h4"
                    fontWeight="bold"
                >
                    Nuevo Proyecto
                </Typography>

                <Typography variant="body1">
                    Complete la información del proyecto
                </Typography>

            </DialogTitle>

            <DialogContent
                sx={{
                    p: 4
                }}
            >

                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 1 }}
                >

                    <Grid item xs={12}>

                        <Typography
                            variant="h6"
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                gap: 1,
                                color: "#1976d2",
                                fontWeight: "bold"
                            }}
                        >
                            <FolderIcon />
                            Información General
                        </Typography>

                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            label="Título"
                            name="titulo"
                            value={formulario.titulo}
                            onChange={cambiarInput}
                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            fullWidth
                            label="Categoría"
                            name="categoria"
                            value={formulario.categoria}
                            onChange={cambiarInput}
                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <FormControl
                            fullWidth
                            size="medium"
                        >
                            <InputLabel id="estado-label">
                                Estado
                            </InputLabel>

                            <Select
                                labelId="estado-label"
                                name="estado"
                                value={formulario.estado}
                                label="Estado"
                                onChange={cambiarInput}
                                sx={{
                                    minHeight: 56
                                }}
                            >

                                <MenuItem value="Pendiente">
                                    Pendiente
                                </MenuItem>

                                <MenuItem value="En progreso">
                                    En progreso
                                </MenuItem>

                                <MenuItem value="Finalizado">
                                    Finalizado
                                </MenuItem>

                            </Select>

                        </FormControl>

                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Descripción"
                            name="descripcion"
                            value={formulario.descripcion}
                            onChange={cambiarInput}
                        />

                    </Grid>

                    <Grid item xs={12}>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label="Descripción adicional"
                            name="descripcion2"
                            value={formulario.descripcion2}
                            onChange={cambiarInput}
                        />

                    </Grid>

                    <Grid item xs={12}>

                        <Box
                            sx={{
                                borderTop: "1px solid #e0e0e0",
                                pt: 3
                            }}
                        >

                            <Typography
                                variant="h6"
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    color: "#1976d2",
                                    fontWeight: "bold"
                                }}
                            >
                                <GroupIcon />
                                Equipo de Trabajo
                            </Typography>

                        </Box>

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            fullWidth
                            label="Nombre del integrante"
                            name="integrante"
                            value={formulario.integrante}
                            onChange={cambiarInput}
                        />

                    </Grid>

                    <Grid item xs={12} md={6}>

                        <TextField
                            fullWidth
                            label="Rol"
                            name="rol"
                            value={formulario.rol}
                            onChange={cambiarInput}
                        />

                    </Grid>

                </Grid>

            </DialogContent>

            <DialogActions
                sx={{
                    px: 4,
                    py: 3,
                    justifyContent: "space-between"
                }}
            >

                <Button
                    variant="outlined"
                    color="error"
                    size="large"
                    onClick={onCancelar}
                >
                    Cancelar
                </Button>

                <Button
                    variant="contained"
                    size="large"
                    onClick={enviarFormulario}
                    sx={{
                        px: 4,
                        borderRadius: 2,
                        boxShadow: 4
                    }}
                >
                    Guardar Proyecto
                </Button>

            </DialogActions>

        </Dialog>

    );

};

export default FormularioProyecto;