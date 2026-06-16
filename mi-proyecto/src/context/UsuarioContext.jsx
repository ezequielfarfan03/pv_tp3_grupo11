import {
    createContext,
    useState,
    useEffect
} from "react";

export const UsuarioContext =
    createContext();

export const UsuarioProvider = ({
    children
}) => {

    const [usuario,
        setUsuario] = useState(() => {

            const usuarioGuardado =
                localStorage.getItem(
                    "usuario"
                );

            return usuarioGuardado

                ? JSON.parse(
                    usuarioGuardado
                )

                : {

                    nombre:
                        "Ezequiel Farfán",

                    dni:
                        "12345678",

                    rol:
                        "Alumno",

                    institucion:
                        "Universidad"

                };

        });

    useEffect(() => {

        localStorage.setItem(

            "usuario",

            JSON.stringify(usuario)

        );

    }, [usuario]);

    const actualizarPerfil =
        (datos) => {

            setUsuario(datos);

        };

    return (

        <UsuarioContext.Provider

            value={{

                usuario,

                actualizarPerfil

            }}

        >

            {children}

        </UsuarioContext.Provider>

    );

};