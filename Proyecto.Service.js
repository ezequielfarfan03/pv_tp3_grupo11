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
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo1", label: "Documentación" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo1", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/sistema-escolar", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfán", rol: "Líder de proyecto" },
                { nombre: "Santiago Valdivia", rol: "Desarrollador Frontend" },
                { nombre: "Francicsco Gutierrez", rol: "Desarrolladora Backend" }
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
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo2", label: "Manual de usuario" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo2", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/app-biblioteca", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfán", rol: "Desarrollador Full Stack" },
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
                { nombre: "Ezequiel Farfán", rol: "Desarrolladora Frontend" },
                { nombre: "Santiago Valdivia", rol: "Desarrollador Backend" },
                { nombre: "Francisco Gutierrez", rol: "Analista funcional" }
            ]
        },
        {
            id: 4,
            titulo: "Gestión Alumnos",
            categoria: "Administración",
            estado: "Pendiente",
            descripcion: [
                "El sistema de Gestión de Alumnos permite administrar la información completa del alumnado: datos personales, historial académico, inscripciones y documentación requerida por la institución.",
                "Su módulo de reportes facilita la generación de listados, actas y certificados de manera automática, reduciendo la carga administrativa del personal no docente."
            ],
            recursos: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo4", label: "Requerimientos" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo4", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/gestion-alumnos", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfán", rol: "Líder técnico" },
                { nombre: "Santiago Valdivia", rol: "Desarrolladora" },
                { nombre: "Francisco Gutierrez", rol: "Base de datos" }
            ]
        },
        {
            id: 5,
            titulo: "Campus Virtual",
            categoria: "Educación",
            estado: "Finalizado",
            descripcion: [
                "El Campus Virtual es una plataforma e-learning que permite a los docentes crear cursos en línea con material multimedia, foros de discusión, evaluaciones y seguimiento del progreso de cada alumno.",
                "Integra videollamadas, calendario académico y notificaciones en tiempo real, ofreciendo una experiencia educativa completa tanto para clases sincrónicas como asincrónicas."
            ],
            recursos: [
                { tipo: "PDF", url: "https://drive.google.com/file/d/ejemplo5", label: "Documentación completa" },
                { tipo: "Drive", url: "https://drive.google.com/drive/folders/ejemplo5", label: "Carpeta del proyecto" },
                { tipo: "GitHub", url: "https://github.com/grupo11/campus-virtual", label: "Repositorio" }
            ],
            equipo: [
                { nombre: "Ezequiel Farfán", rol: "Project Manager" },
                { nombre: "Santiago Valdivia", rol: "Desarrollador Full Stack" },
                { nombre: "Francisco Gutierrez", rol: "Diseñadora UX" }
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

