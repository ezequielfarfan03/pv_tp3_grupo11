import { useState } from "react";

const FormularioProyecto = ({
    onAgregar,
    onCancelar
}) => {

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

    const cambiarInput = (e) => {

        const { name, value } = e.target;

        setFormulario({

            ...formulario,

            [name]: value

        });
    };

    const enviarFormulario = () => {

        onAgregar(formulario);

        setFormulario({

            titulo: "",
            categoria: "",
            estado: "",

            descripcion: "",
            descripcion2: "",

            integrante: "",
            rol: ""

        });
    };

    return (

        <div className="formulario-modal">

            <div className="formulario">

                <h2>Agregar Proyecto</h2>

                <input
                    type="text"
                    name="titulo"
                    placeholder="Título"
                    value={formulario.titulo}
                    onChange={cambiarInput}
                />

                <input
                    type="text"
                    name="categoria"
                    placeholder="Categoría"
                    value={formulario.categoria}
                    onChange={cambiarInput}
                />

                <input
                    type="text"
                    name="estado"
                    placeholder="Estado"
                    value={formulario.estado}
                    onChange={cambiarInput}
                />

                <textarea
                    name="descripcion"
                    placeholder="Descripción"
                    value={formulario.descripcion}
                    onChange={cambiarInput}
                />

                <textarea
                    name="descripcion2"
                    placeholder="Descripción adicional"
                    value={formulario.descripcion2}
                    onChange={cambiarInput}
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

                    <button onClick={enviarFormulario}>
                        Agregar
                    </button>

                    <button
                        className="btn-cancelar"
                        onClick={onCancelar}
                    >
                        Cancelar
                    </button>

                </div>

            </div>

        </div>

    );
};

export default FormularioProyecto;