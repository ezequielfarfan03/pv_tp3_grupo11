import { useState, useEffect, useRef } from "react";

import proyectoService
    from "../services/proyectoService";

import ProyectoCard
    from "./ProyectoCard";

import DetalleProyecto
    from "./DetalleProyecto";

import FormularioProyecto
    from "./FormularioProyecto";

import RegistroActividad
    from "./RegistroActividad";

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

    const [ultimaActualizacion,
        setUltimaActualizacion] =
        useState("");

    const primeraCarga =
        useRef(true);

    const accionUsuario =
        useRef(false);

    useEffect(() => {

        if (primeraCarga.current) {

            primeraCarga.current = false;
            return;

        }

        if (!accionUsuario.current)
            return;

        const ahora = new Date();

        const fechaHora =

            `${ahora.getDate()
                .toString()
                .padStart(2, "0")}/` +

            `${(ahora.getMonth() + 1)
                .toString()
                .padStart(2, "0")}/` +

            `${ahora.getFullYear()} a las ` +

            `${ahora.getHours()
                .toString()
                .padStart(2, "0")}:` +

            `${ahora.getMinutes()
                .toString()
                .padStart(2, "0")} hs.`;

        setUltimaActualizacion(
            fechaHora
        );

        accionUsuario.current = false;

    }, [proyectos]);

    const eliminar = (id) => {

        proyectoService.eliminarProyecto(id);

        accionUsuario.current = true;

        setProyectos(
            proyectoService.obtenerProyectos()
        );

        if (
            proyectoSeleccionado &&
            proyectoSeleccionado.id === id
        ) {
            setProyectoSeleccionado(null);
        }
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

    const agregarProyecto = (datos) => {

        const {

            titulo,
            categoria,
            estado,

            descripcion,
            descripcion2,

            integrante,
            rol

        } = datos;

        if (
            titulo.trim() === "" ||
            categoria.trim() === "" ||
            estado.trim() === ""
        ) {

            alert(
                "Complete los campos obligatorios"
            );

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

        accionUsuario.current = true;

        setProyectos(
            proyectoService.obtenerProyectos()
        );

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
                        buscar(
                            e.target.value
                        )
                    }
                />

            </div>

            <div className="contenedor-proyectos">

                {
                    proyectos.map(
                        (proyecto) => (

                            <ProyectoCard

                                key={
                                    proyecto.id
                                }

                                proyecto={
                                    proyecto
                                }

                                onEliminar={
                                    eliminar
                                }

                                onVerDetalle={
                                    setProyectoSeleccionado
                                }

                            />

                        )
                    )
                }

            </div>

            {
                proyectoSeleccionado && (

                    <DetalleProyecto

                        proyecto={
                            proyectoSeleccionado
                        }

                        onCerrar={() =>
                            setProyectoSeleccionado(
                                null
                            )
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

                    <FormularioProyecto

                        onAgregar={
                            agregarProyecto
                        }

                        onCancelar={() =>
                            setMostrarFormulario(
                                false
                            )
                        }

                    />

                )
            }

            {
                ultimaActualizacion !== "" && (

                    <RegistroActividad

                        fechaHora={
                            ultimaActualizacion
                        }

                    />

                )
            }

        </main>

    );

};

export default ListaProyectos;