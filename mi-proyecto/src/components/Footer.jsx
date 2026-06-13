import { Box, Typography } from "@mui/material";

const Footer = () => {

    return (

        <Box
            sx={{
                mt: 6,
                p: 2,
                backgroundColor: "#1976d2",
                color: "white",
                textAlign: "center"
            }}
        >
            <Typography>
                Programación Visual - React
            </Typography>
        </Box>

    );
};

export default Footer;