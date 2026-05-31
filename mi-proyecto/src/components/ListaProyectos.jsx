import { useState } from "react";

import proyectoService
    from "../services/proyectoService";

import ProyectoCard
    from "./ProyectoCard";

import DetalleProyecto
    from "./DetalleProyecto";

const ListaProyectos = () => {

    const [proyectos,
        setProyectos] = useState(
            proyectoService.obtenerProyectos()
        );

    const [busqueda,
        setBusqueda] = useState("");

    const [proyectoSeleccionado,
        setProyectoSeleccionado] =
        useState(null);

    const [mostrarFormulario,
        setMostrarFormulario] =
        useState(false);

    const [formulario,
        setFormulario] = useState({

            titulo: "",
            categoria: "",
            estado: "",

            descripcion: "",
            descripcion2: "",

            integrante: "",
            rol: ""

        });
    const eliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        setProyectos(
            proyectoService.obtenerProyectos()
        );
    };

    const buscar = (texto) => {

        setBusqueda(texto);

        if (texto === "") {

            setProyectos(
                proyectoService.obtenerProyectos()
            );

        } else {

            setProyectos(
                proyectoService.buscarProyecto(texto)
            );
        }
    };

    const cambiarInput = (e) => {

        const {
            name,
            value
        } = e.target;

        setFormulario({

            ...formulario,

            [name]: value

        });
    };

    const agregarProyecto = () => {

        const {

            titulo,
            categoria,
            estado,
            descripcion,
            descripcion2,
            integrante,
            rol
        } = formulario;

        if (
            titulo === "" ||
            categoria === "" ||
            estado === ""
        ) {
            alert("Complete los campos");
            return;
        }

        const nuevoProyecto = {

            id: Date.now(),
            titulo,
            categoria,
            estado,

            descripcion: [
                descripcion,
                descripcion2
            ],

            recursos: [
                "PDF",
                "Drive",
                "GitHub"
            ],

            equipo: [
                {
                    nombre: integrante,
                    rol: rol
                }
            ]
        };

        proyectoService.agregarProyecto(
            nuevoProyecto
        );

        setProyectos(
            proyectoService.obtenerProyectos()
        );

        setFormulario({

            titulo: "",
            categoria: "",
            estado: "",
            descripcion: "",
            descripcion2: "",
            integrante: "",
            rol: ""

        });

        setMostrarFormulario(false);
    };

    return (

        <main className="main">

            <h2>
                Lista de Proyectos
            </h2>

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

            <div className="contenedor-proyectos">

                {
                    proyectos.map((proyecto) => (

                        <ProyectoCard

                            key={proyecto.id}

                            proyecto={proyecto}

                            onEliminar={eliminar}

                            onVerDetalle={
                                setProyectoSeleccionado
                            }

                        />

                    ))
                }

            </div>

            {    
                proyectoSeleccionado && (

                    <DetalleProyecto

                        proyecto={
                            proyectoSeleccionado
                        }

                        onCerrar={() =>
                            setProyectoSeleccionado(null)
                        }

                    />

                )
            }
    

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

            {
                mostrarFormulario && (

                    <div className="formulario-modal">

                        <div className="formulario">

                            <h2>
                                Agregar Proyecto
                            </h2>

                            <input
                                type="text"
                                name="titulo"
                                placeholder="Título"
                                value={
                                    formulario.titulo
                                }
                                onChange={
                                    cambiarInput
                                }
                            />

                            <input
                                type="text"
                                name="categoria"
                                placeholder="Categoría"
                                value={
                                    formulario.categoria
                                }
                                onChange={
                                    cambiarInput
                                }
                            />

                            <input
                                type="text"
                                name="estado"
                                placeholder="Estado"
                                value={
                                    formulario.estado
                                }
                                onChange={
                                    cambiarInput
                                }
                            />

                            <textarea
                                name="descripcion"
                                placeholder="Descripción"
                                value={
                                    formulario.descripcion
                                }
                                onChange={
                                    cambiarInput
                                }
                            />

                            <textarea
                                name="descripcion2"
                                placeholder="Descripción adicional"
                                value={
                                    formulario.descripcion2
                                }
                                onChange={
                                    cambiarInput
                                }
                            />

                            <input
                                type="text"
                                name="integrante"
                                placeholder="Nombre integrante"
                                value={formulario.integrante}
                                onChange={cambiarInput}
                            />

                            <input
                                type="text"
                                name="rol"
                                placeholder="Rol integrante"
                                value={formulario.rol}
                                onChange={cambiarInput}
                            />

                            <div className="botones-formulario">

                                <button
                                    onClick={
                                        agregarProyecto
                                    }
                                >
                                    Agregar
                                </button>

                                <button
                                    className="btn-cancelar"
                                    onClick={() =>
                                        setMostrarFormulario(
                                            false
                                        )
                                    }
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