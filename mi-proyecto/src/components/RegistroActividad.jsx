import Alert
    from "@mui/material/Alert";

const RegistroActividad = ({
    fechaHora
}) => {

    return (

        <Alert
            severity="info"
            sx={{ mt: 3 }}
        >

            Última actualización de la lista:
            {" "}
            {fechaHora}

        </Alert>

    );

};

export default RegistroActividad;