import { useState } from "react";

import proyectoService from "../services/proyectoService";

const ListaProyectos = () => {

    const [proyectos, setProyectos] =
        useState(
            proyectoService.obtenerProyectos()
        );

    const [busqueda, setBusqueda] =
        useState("");

    const [titulo, setTitulo] =
        useState("");

    const [categoria, setCategoria] =
        useState("");

    const [estado, setEstado] =
        useState("");

    const [mostrarFormulario,
        setMostrarFormulario] =
        useState(false);

    // ELIMINAR

    const eliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };

    // BUSCAR

    const buscar = (texto) => {

        setBusqueda(texto);

        if(texto === ""){

            setProyectos(
                proyectoService.obtenerProyectos()
            );

        } else {

            setProyectos(
                proyectoService.buscarProyecto(texto)
            );
        }
    };

    // AGREGAR

    const agregarProyecto = () => {

        if(
            titulo === "" ||
            categoria === "" ||
            estado === ""
        ){
            alert("Complete todos los campos");
            return;
        }

        const nuevoProyecto = {
            id: Date.now(),
            titulo,
            categoria,
            estado
        };

        proyectoService.agregarProyecto(
            nuevoProyecto
        );

        setProyectos(
            proyectoService.obtenerProyectos()
        );

        setTitulo("");
        setCategoria("");
        setEstado("");

        setMostrarFormulario(false);
    };

    return (

        <main className="main">

            <h2>
                Lista de Proyectos
            </h2>

            {/* BUSCADOR */}

            <div className="buscador">

                <input
                    type="text"
                    placeholder="Buscar proyecto..."
                    value={busqueda}
                    onChange={(e) =>
                        buscar(e.target.value)
                    }
                />

            </div>

            {/* LISTA */}

            <div className="contenedor-proyectos">

                {
                    proyectos.map((proyecto) => (

                        <div
                            className="card"
                            key={proyecto.id}
                        >

                            <h3>
                                {proyecto.titulo}
                            </h3>

                            <p>
                                <strong>
                                    Categoría:
                                </strong>

                                {" "}

                                {proyecto.categoria}
                            </p>

                            <p>
                                <strong>
                                    Estado:
                                </strong>

                                {" "}

                                {proyecto.estado}
                            </p>

                            <button
                                onClick={() =>
                                    eliminar(
                                        proyecto.id
                                    )
                                }
                            >
                                Eliminar
                            </button>

                        </div>

                    ))
                }

            </div>

            {/* BOTON FLOTANTE */}

            {
                busqueda === "" && (

                    <button
                        className="boton-flotante"
                        onClick={() =>
                            setMostrarFormulario(
                                !mostrarFormulario
                            )
                        }
                    >
                        +
                    </button>

                )
            }

            {/* FORMULARIO MODAL */}

            {
                mostrarFormulario && (

                    <div className="formulario-modal">

                        <div className="formulario">

                            <h2>
                                Agregar Proyecto
                            </h2>

                            <input
                                type="text"
                                placeholder="Título"
                                value={titulo}
                                onChange={(e) =>
                                    setTitulo(
                                        e.target.value
                                    )
                                }
                            />

                            <input
                                type="text"
                                placeholder="Categoría"
                                value={categoria}
                                onChange={(e) =>
                                    setCategoria(
                                        e.target.value
                                    )
                                }
                            />

                            <input
                                type="text"
                                placeholder="Estado"
                                value={estado}
                                onChange={(e) =>
                                    setEstado(
                                        e.target.value
                                    )
                                }
                            />

                            <div className="botones-formulario">

                                <button
                                    onClick={
                                        agregarProyecto
                                    }
                                >
                                    Agregar Proyecto
                                </button>

                                <button
                                    className="btn-cancelar"
                                    onClick={() => {

                                        setMostrarFormulario(
                                            false
                                        );

                                        setTitulo("");
                                        setCategoria("");
                                        setEstado("");

                                    }}
                                >
                                    Cancelar
                                </button>

                            </div>

                        </div>

                    </div>

                )
            }

        </main>

    );
};

export default ListaProyectos;