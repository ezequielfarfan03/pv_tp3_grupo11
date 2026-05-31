const ProyectoCard = ({
    proyecto,
    onEliminar,
    onVerDetalle
}) => {

    const {
        titulo,
        categoria,
        estado,
        id
    } = proyecto;

    return (

        <div className="card">

            <h3>{titulo}</h3>

            <p>
                <strong>Categoría:</strong> {categoria}
            </p>

            <p>
                <strong>Estado:</strong> {estado}
            </p>

            <div className="botones-card">

                <button
                    className="btn-detalle"
                    onClick={() =>
                        onVerDetalle(proyecto)
                    }
                >
                    Ver detalle
                </button>

                <button
                    className="btn-eliminar"
                    onClick={() =>
                        onEliminar(id)
                    }
                >
                    Eliminar
                </button>

            </div>

        </div>

    );

};

export default ProyectoCard;