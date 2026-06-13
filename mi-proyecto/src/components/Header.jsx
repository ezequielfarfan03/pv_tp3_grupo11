import {
    AppBar,
    Toolbar,
    Typography,
    Box
} from "@mui/material";

import logo from "../img/logo.jpg";

const Header = () => {

    return (

        <AppBar
            position="static"
            elevation={4}
        >

            <Toolbar
                sx={{
                    minHeight: 100,
                    display: "flex",
                    justifyContent: "center",
                    position: "relative"
                }}
            >

                <Box
                    sx={{
                        position: "absolute",
                        left: 20,
                        backgroundColor: "white",
                        borderRadius: "999px",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    }}
                >
                    <Box
                        component="img"
                        src={logo}
                        alt="Logo"
                        sx={{
                            width: 70,
                            height: 40,
                            objectFit: "contain"
                        }}
                    />
                </Box>

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        letterSpacing: 1
                    }}
                >
                    Gestión de Proyectos Educativos
                </Typography>

            </Toolbar>

        </AppBar>

    );

};

export default Header;