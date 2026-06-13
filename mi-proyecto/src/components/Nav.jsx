import { NavLink } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Nav = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                gap: 2,
                py: 2,
                backgroundColor: "#f5f5f5"
            }}
        >
            <Button component={NavLink} to="/dashboard">
                Dashboard
            </Button>

            <Button component={NavLink} to="/proyectos">
                Proyectos
            </Button>

            <Button component={NavLink} to="/perfil">
                Perfil
            </Button>
        </Box>
    );
};

export default Nav;