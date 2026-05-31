const DetalleProyecto = ({ proyecto, onCerrar }) => {

    const { titulo, categoria, estado, descripcion, recursos, equipo } = proyecto;

    return (

        <div className="formulario-modal">

            <div className="formulario detalle-proyecto">

                <h2>
                    {titulo}
                </h2>

                <p>
                    <strong>Categoría:</strong>
                    {" "}
                    {categoria}
                </p>

                <p>
                    <strong>Estado:</strong>
                    {" "}
                    {estado}
                </p>

                {/* DESCRIPCIÓN */}

                <div className="detalle-seccion">

                    <h3>Descripción</h3>

                    {
                        descripcion.map((parrafo, index) => (
                            <p key={index}>
                                {parrafo}
                            </p>
                        ))
                    }

                </div>

                {/* RECURSOS */}

                <div className="detalle-seccion">

                    <h3>Recursos</h3>

                    <ul className="lista-recursos">

                        {
                            recursos.map((recurso, index) => (

                                <li key={index}>

                                    <strong>{recurso.tipo}:</strong>
                                    {" "}
                                    <a
                                        href={recurso.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {recurso.label}
                                    </a>

                                </li>

                            ))
                        }

                    </ul>

                </div>

                {/* EQUIPO */}

                <div className="detalle-seccion">

                    <h3>Equipo</h3>

                    <ul className="lista-equipo">

                        {
                            equipo.map((miembro, index) => (

                                <li key={index}>
                                    <strong>{miembro.nombre}</strong>
                                    {" — "}
                                    {miembro.rol}
                                </li>

                            ))
                        }

                    </ul>

                </div>

                <div className="botones-formulario">

                    <button
                        className="btn-cancelar"
                        onClick={onCerrar}
                    >
                        Cerrar
                    </button>

                </div>

            </div>

        </div>

    );

};

export default DetalleProyecto;
