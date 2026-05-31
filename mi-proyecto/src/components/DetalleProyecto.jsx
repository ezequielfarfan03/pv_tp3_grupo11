const DetalleProyecto = ({
    proyecto,
    onCerrar
}) => {

    if (!proyecto) {
        return null;
    }

    const {
        titulo,
        categoria,
        estado,
        descripcion,
        recursos,
        equipo
    } = proyecto;

    return (

        <div className="formulario-modal">

            <div className="formulario detalle">

                <h2>{titulo}</h2>

                <p>
                    <strong>Categoría:</strong> {categoria}
                </p>

                <p>
                    <strong>Estado:</strong> {estado}
                </p>

                <h3>Descripción</h3>

                {
                    descripcion.map((parrafo, index) => (

                        <p key={index}>
                            {parrafo}
                        </p>

                    ))
                }

                <h3>Recursos</h3>

                <ul>

                    {
                        recursos.map((recurso, index) => (

                            <li key={index}>
                                {recurso}
                            </li>

                        ))
                    }

                </ul>

                <h3>Equipo</h3>

                <ul>

                    {
                        equipo.map((persona, index) => (

                            <li key={index}>
                                {persona.nombre}
                                {" - "}
                                {persona.rol}
                            </li>

                        ))
                    }

                </ul>

                <button
                    className="btn-cancelar"
                    onClick={onCerrar}
                >
                    Cerrar
                </button>

            </div>

        </div>

    );

};

export default DetalleProyecto;