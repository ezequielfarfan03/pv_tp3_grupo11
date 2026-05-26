const proyectoService = (() => {

    let proyectos = [
        {
            id: 1,
            titulo: "Sistema Escolar",
            categoria: "Educación",
            estado: "En progreso"
        },
        {
            id: 2,
            titulo: "App Biblioteca",
            categoria: "Software",
            estado: "Finalizado"
        },
        {
            id: 3,
            titulo: "Portal Docente",
            categoria: "Web",
            estado: "En progreso"
        },
        {
            id: 4,
            titulo: "Gestión Alumnos",
            categoria: "Administración",
            estado: "Pendiente"
        },
        {
            id: 5,
            titulo: "Campus Virtual",
            categoria: "Educación",
            estado: "Finalizado"
        }
    ];

    const obtenerProyectos = () => {
        return [...proyectos];
    };

    const agregarProyecto = (proyecto) => {
        proyectos.push(proyecto);
    };

    const eliminarProyecto = (id) => {
        proyectos = proyectos.filter(
            proyecto => proyecto.id !== id
        );
    };

    const buscarProyecto = (texto) => {

        return proyectos.filter(proyecto =>
            proyecto.titulo.toLowerCase()
            .includes(texto.toLowerCase())
        );
    };

    return {
        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto
    };

})();

export default proyectoService;