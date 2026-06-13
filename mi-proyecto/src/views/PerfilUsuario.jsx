import {
    Container,
    Card,
    CardContent,
    Typography,
    Avatar,
    Grid,
    Divider,
    Box
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";
import SchoolIcon from "@mui/icons-material/School";
import BadgeIcon from "@mui/icons-material/Badge";

const PerfilUsuario = () => {
    return (
        <Container maxWidth="sm" sx={{ mt: 5 }}>
            <Card
                elevation={6}
                sx={{
                    borderRadius: 4,
                    overflow: "hidden"
                }}
            >
                {/* Header visual */}
                <Box
                    sx={{
                        bgcolor: "primary.main",
                        height: 100,
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        pb: -4
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
                            fontSize: 40,
                            border: "3px solid white"
                        }}
                    >
                        EF
                    </Avatar>
                </Box>

                <CardContent sx={{ textAlign: "center", mt: 1 }}>
                    <Typography variant="h5" fontWeight="bold">
                        Ezequiel Farfán
                    </Typography>

                    <Typography variant="body2" color="text.secondary">
                        Perfil de usuario
                    </Typography>

                    <Divider sx={{ my: 2 }} />

                    <Grid container spacing={2} textAlign="left">
                        <Grid item xs={12}>
                            <Typography display="flex" alignItems="center" gap={1}>
                                <PersonIcon fontSize="small" />
                                <strong>Nombre:</strong> Ezequiel Farfán
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography display="flex" alignItems="center" gap={1}>
                                <BadgeIcon fontSize="small" />
                                <strong>Rol:</strong> Estudiante
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Typography display="flex" alignItems="center" gap={1}>
                                <SchoolIcon fontSize="small" />
                                <strong>Institución:</strong> Unju FI
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </Container>
    );
};

export default PerfilUsuario;