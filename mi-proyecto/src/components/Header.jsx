import {
    AppBar,
    Toolbar,
    Typography,
    Box,
    Chip
} from "@mui/material";

import PersonIcon from "@mui/icons-material/Person";

import { useContext } from "react";

import logo from "../img/logo.jpg";

import { UsuarioContext } from "../context/UsuarioContext";

const Header = () => {

    const { usuario } =
        useContext(UsuarioContext);

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

                {/* Logo */}

                <Box
                    sx={{
                        position: "absolute",
                        left: 20,
                        backgroundColor: "white",
                        borderRadius: "999px",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: 2
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

                {/* Título */}

                <Typography
                    variant="h4"
                    fontWeight="bold"
                    sx={{
                        letterSpacing: 1
                    }}
                >
                    Gestión de Proyectos Educativos
                </Typography>

                {/* Usuario */}

                <Chip
                    icon={<PersonIcon />}
                    label={`${usuario.nombre} - ${usuario.rol}`}
                    sx={{
                        position: "absolute",
                        right: 20,
                        backgroundColor:
                            "rgba(255,255,255,0.15)",
                        color: "white",
                        fontWeight: "bold",

                        "& .MuiChip-icon": {
                            color: "white"
                        }
                    }}
                />

            </Toolbar>

        </AppBar>

    );

};

export default Header;