const proyectoService = (() => {

    let proyectos = [
        {
            id: 1,
            titulo: "Sistema Escolar",
            categoria: "Educación",
            estado: "En progreso",
            descripcion: [
                "El Sistema Escolar es una plataforma integral diseñada para gestionar todos los procesos administrativos y académicos de instituciones educativas. Permite registrar alumnos, docentes, cursos y calificaciones de manera centralizada y eficiente.",
                "Además, cuenta con módulos de comunicación entre docentes y familias, generación de reportes académicos y seguimiento del rendimiento estudiantil a lo largo del ciclo lectivo."
            ],
            recursos: [
                { tipo: "PDF", url: "https://drive.google.com/", label: "Documentación" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/sistema-escolar", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfan", rol: "Líder de proyecto" },
                { nombre: "santiago valdivia", rol: "Desarrollador Frontend" },
                { nombre: "Francisco Gutierrez", rol: "Desarrolladora Backend" }
            ]
        },
        {
            id: 2,
            titulo: "App Biblioteca",
            categoria: "Software",
            estado: "Finalizado",
            descripcion: [
                "La App Biblioteca es un sistema de gestión de préstamos y catálogo bibliográfico orientado a bibliotecas escolares y universitarias. Permite buscar libros, registrar préstamos y enviar recordatorios de devolución automáticamente.",
                "El sistema incluye un panel de administración para gestionar el inventario, dar de alta nuevos ejemplares y generar estadísticas de uso de la colección bibliográfica."
            ],
            recursos: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo", label: "Manual de usuario" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/app-biblioteca", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfan", rol: "Desarrollador Full Stack" },
                { nombre: "Santiago Valdivia", rol: "Diseñadora UI/UX" },
                { nombre: "Francisco Gutierrez", rol: "Tester" }
            ]
        },
        {
            id: 3,
            titulo: "Portal Docente",
            categoria: "Web",
            estado: "En progreso",
            descripcion: [
                "El Portal Docente es una aplicación web que centraliza las herramientas de trabajo del cuerpo docente. Desde allí pueden cargar materiales, tomar asistencia, registrar calificaciones y comunicarse con sus alumnos.",
                "El portal también permite la planificación de clases y el seguimiento del cumplimiento del programa curricular, facilitando la labor docente y mejorando la organización institucional."
            ],
            recursos: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo3", label: "Especificación técnica" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo3", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/portal-docente", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfan", rol: "Desarrolladora Frontend" },
                { nombre: "Santiago Valdivia", rol: "Desarrollador Backend" },
                { nombre: "Florencia Díaz", rol: "Analista funcional" }
            ]
        },
        {
            ]
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
