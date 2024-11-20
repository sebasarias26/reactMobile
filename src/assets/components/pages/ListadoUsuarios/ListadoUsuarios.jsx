import React from 'react'
import { useState, useEffect } from 'react'
import { buscarUsuario } from '../../../../services/serviciosUsuario.js';

function ListadoUsuarios() {
    // Simulando un conjunto de datos que viene del Backend
    // El useEffect se activa cuando se ejecuta una acción, está alerta al momento en que un estado cambie
    
    let usuarios = [
        { id: 5, nombre: "Sebastian Poveda Arias", telefono: "52263985", ciudad: "Medallo" },
        { id: 6, nombre: "Andrea Sandoval", telefono: "52263985", ciudad: "Medallo" },
        { id: 7, nombre: "Maria Perez", telefono: "52263985", ciudad: "Medallo" },
        { id: 8, nombre: "Juan Perez", telefono: "52263985", ciudad: "Medallo" },
        { id: 9, nombre: "Pedro Perez", telefono: "52263985", ciudad: "Medallo" }
    ]

    const [datosApi, setDatosApi] = useState(null);
    const [estadoCarga, setEstadoCarga] = useState(true);

    // Programo el useEffect para garantizar que llamará el servicio y voy a traer los datos

    useEffect(() => {
        buscarUsuario()
            .then(respuestaback => {
                setDatosApi(respuestaback);
                setEstadoCarga(false);
            })
    }, []); // Esto se pone para garantizar que solo se haga una ves lo que se haga en este useEffect

    if (estadoCarga === true) {
        return (
            <>
                <h3>Estamos cargando...</h3>
            </>
        )
    } else {
        return (
            <>
                <br /><br /><br /><br />
                <h3>LISTADO DE USUARIOS</h3>
                <div className="container">
                    <div className="row row-cols-1 row-cols-md-3 g-3">
                        {/* vamos a pintar una lista de objetos */}
                        {setDatosApi.map(usuario => (
                            <div className="col" key={usuario.id}>
                                <div className="card h-100 shadow p-5">
                                    <h5>{usuario.nombre}</h5>
                                    <h4>Ciudad: {usuario.ciudad}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </>
        )
    }
}

export default ListadoUsuarios
