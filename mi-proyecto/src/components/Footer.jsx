import {
    Box,
    Typography,
    Divider
} from "@mui/material";

import SchoolIcon from "@mui/icons-material/School";
import CodeIcon from "@mui/icons-material/Code";

const Footer = () => {

    return (

        <Box
            component="footer"
            sx={{
                mt: "auto",
                bgcolor: "primary.main",
                color: "white",
                py: 2,
                textAlign: "center",
                boxShadow: "0 -2px 10px rgba(0,0,0,0.15)"
            }}
        >

            <Typography
                variant="body2"
                sx={{ mt: 0.5 }}
            >
                Trabajo Práctico N.º 3 - Programación Visual
            </Typography>

            <Divider
                sx={{
                    my: 1.5,
                    bgcolor: "rgba(255,255,255,0.3)",
                    width: "60%",
                    mx: "auto"
                }}
            />

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 4,
                    flexWrap: "wrap",
                    mb: 1
                }}
            >

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    }}
                >
                    <SchoolIcon fontSize="small" />
                    <Typography variant="body2">
                        Universidad Nacional de Jujuy
                    </Typography>
                </Box>

                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 1
                    }}
                >
                    <CodeIcon fontSize="small" />
                    <Typography variant="body2">
                        React + Material UI
                    </Typography>
                </Box>

            </Box>
        </Box>

    );

};

export default Footer;