const proyectoService = (() => {

    let proyectos = [

        {
            id: 1,

            titulo: "Sistema Escolar",

            categoria: "Educación",

            estado: "En progreso",

            descripcion: [

                "Sistema destinado a la gestión integral de alumnos, docentes y materias.",

                "Permite registrar calificaciones, asistencia y generar reportes académicos."

            ],

            recursos: [
                "PDF",
                "Drive",
                "GitHub"
            ],

            equipo: [
                {
                    nombre: "Juan Pérez",
                    rol: "Frontend"
                },
                {
                    nombre: "María Gómez",
                    rol: "Backend"
                }
            ]
        },

        {
            id: 2,

            titulo: "App Biblioteca",

            categoria: "Software",

            estado: "Finalizado",

            descripcion: [

                "Aplicación para administrar préstamos y devoluciones de libros.",

                "Facilita la búsqueda de ejemplares y el control del inventario bibliográfico."

            ],

            recursos: [
                "PDF",
                "GitHub"
            ],

            equipo: [
                {
                    nombre: "Ana López",
                    rol: "Analista"
                },
                {
                    nombre: "Carlos Ruiz",
                    rol: "Programador"
                }
            ]
        },

        {
            id: 3,

            titulo: "Portal Docente",

            categoria: "Web",

            estado: "En progreso",

            descripcion: [

                "Portal destinado a la comunicación entre docentes y estudiantes.",

                "Permite compartir material de estudio, tareas y avisos importantes."

            ],

            recursos: [
                "Drive",
                "GitHub"
            ],

            equipo: [
                {
                    nombre: "Lucía Fernández",
                    rol: "Frontend"
                },
                {
                    nombre: "Pedro Martínez",
                    rol: "Backend"
                }
            ]
        },

        {
            id: 4,

            titulo: "Gestión Alumnos",

            categoria: "Administración",

            estado: "Pendiente",

            descripcion: [

                "Sistema orientado a la administración de información estudiantil.",

                "Permitirá gestionar inscripciones, legajos y seguimiento académico."

            ],

            recursos: [
                "PDF",
                "Drive"
            ],

            equipo: [
                {
                    nombre: "Sofía Torres",
                    rol: "Diseñadora UX"
                },
                {
                    nombre: "Diego Acosta",
                    rol: "Analista Funcional"
                }
            ]
        },

        {
            id: 5,

            titulo: "Campus Virtual",

            categoria: "Educación",

            estado: "Finalizado",

            descripcion: [

                "Plataforma educativa para el dictado de cursos virtuales.",

                "Incluye evaluaciones online, foros de discusión y seguimiento de alumnos."

            ],

            recursos: [
                "PDF",
                "Drive",
                "GitHub"
            ],

            equipo: [
                {
                    nombre: "Valentina Díaz",
                    rol: "Full Stack"
                },
                {
                    nombre: "Tomás Romero",
                    rol: "Administrador de Base de Datos"
                }
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
            proyecto.titulo
                .toLowerCase()
                .includes(texto.toLowerCase())
        );
    };

    const obtenerProyectoPorId = (id) => {

        return proyectos.find(

            proyecto =>
                proyecto.id === Number(id)

        );

    };

    return {

        obtenerProyectos,
        agregarProyecto,
        eliminarProyecto,
        buscarProyecto,
        obtenerProyectoPorId

    };

})();

export default proyectoService;