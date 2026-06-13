import {
    Container,
    Grid,
    Card,
    CardContent,
    Typography,
    Box
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import TaskIcon from "@mui/icons-material/Task";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const Dashboard = () => {

    return (

        <Container
            maxWidth="lg"
            sx={{
                py: 6
            }}
        >

            <Typography
                variant="h2"
                align="center"
                fontWeight="bold"
                gutterBottom
                sx={{ mt: 0 }}
            >
                Dashboard
            </Typography>

            <Typography
                variant="h6"
                align="center"
                color="text.secondary"
                sx={{ mb: 6 }}
            >
                Bienvenido al sistema de gestión de proyectos educativos
            </Typography>

            <Grid
                container
                spacing={4}
                justifyContent="center"
                alignItems="center"
                sx={{
                    maxWidth: "100%",
                    margin: "0 auto"
                }}
            >

                {/* TOTAL PROYECTOS */}

                <Grid item xs={12} sm={6} md={3}>

                    <Card
                        elevation={6}
                        sx={{
                            borderRadius: 4,
                            textAlign: "center",
                            transition: "0.3s",

                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: 10
                            }
                        }}
                    >

                        <CardContent>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >

                                <SchoolIcon
                                    color="primary"
                                    sx={{
                                        fontSize: 60,
                                        mb: 2
                                    }}
                                />

                                <Typography
                                    variant="h6"
                                    gutterBottom
                                >
                                    Total de proyectos
                                </Typography>

                                <Typography
                                    variant="h2"
                                    color="primary"
                                    fontWeight="bold"
                                >
                                    12
                                </Typography>

                            </Box>

                        </CardContent>

                    </Card>

                </Grid>

                {/* EN CURSO */}

                <Grid item xs={12} sm={6} md={3}>

                    <Card
                        elevation={6}
                        sx={{
                            borderRadius: 4,
                            textAlign: "center",
                            transition: "0.3s",

                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: 10
                            }
                        }}
                    >

                        <CardContent>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >

                                <TaskIcon
                                    color="success"
                                    sx={{
                                        fontSize: 60,
                                        mb: 2
                                    }}
                                />

                                <Typography
                                    variant="h6"
                                    gutterBottom
                                >
                                    Proyectos en curso
                                </Typography>

                                <Typography
                                    variant="h2"
                                    color="success.main"
                                    fontWeight="bold"
                                >
                                    5
                                </Typography>

                            </Box>

                        </CardContent>

                    </Card>

                </Grid>

                {/* FINALIZADOS */}

                <Grid item xs={12} sm={6} md={3}>

                    <Card
                        elevation={6}
                        sx={{
                            borderRadius: 4,
                            textAlign: "center",
                            transition: "0.3s",

                            "&:hover": {
                                transform: "translateY(-8px)",
                                boxShadow: 10
                            }
                        }}
                    >

                        <CardContent>

                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center"
                                }}
                            >

                                <CheckCircleIcon
                                    color="secondary"
                                    sx={{
                                        fontSize: 60,
                                        mb: 2
                                    }}
                                />

                                <Typography
                                    variant="h6"
                                    gutterBottom
                                >
                                    Finalizados
                                </Typography>

                                <Typography
                                    variant="h2"
                                    color="secondary"
                                    fontWeight="bold"
                                >
                                    7
                                </Typography>

                            </Box>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

        </Container>

    );
};

export default Dashboard;